import { Component, State, Prop, Method } from '@stencil/core';
import { GithubData } from '../../utils/types';

@Component({
  tag: 'spring-graphql',
  styleUrl: 'spring-graphql.scss'
})
export class StencilGraphql {
  @Prop() token: string;
  @Prop() organisation: string = 'github';

  @State() githubData: Array<GithubData>;

  componentWillLoad() {
    if (this.token) {
      this.fetchData();
    }
  }

  @Method()
  async fetchData() {
    try {
      const query: string = `
        query {
          organization(login: "${this.organisation}") {
            repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
              nodes {
                name
                url
                updatedAt
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "Post",
        headers: { Authorization: `Bearer ${this.token}` },
        body: JSON.stringify({ query })
      });

      const {
        data: {
          organization: {
            repositories: { nodes }
          }
        }
      } = await response.json();

      return (this.githubData = [...nodes]);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  }

  @Method()
  displayGitData() {
    if (this.githubData) {
      return this.githubData.map(repo => (
        <li>
          <span>Repo:</span>
          <a href={repo.url} target="_blank">{repo.name}</a>
          <p>{repo.updatedAt.toString()}</p>
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <h3>Spring GraphQL</h3>
        {this.token && <ul>{this.displayGitData()}</ul>}
        {!this.token && <p class="error">Please add a valid GitHub token</p>}
      </div>
    );
  }
}