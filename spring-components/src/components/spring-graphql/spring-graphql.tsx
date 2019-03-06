import { Component, State, Prop, Method } from '@stencil/core';
import { Country } from '../../utils/types';
@Component({
  tag: 'spring-graphql',
  styleUrl: 'spring-graphql.scss'
})
export class StencilGraphql {
  @Prop() countryCode: string = 'DE';
  @State() country: Country;

  componentWillLoad() {
    const { countryCode } = this;
  
    if(countryCode) {
      this.fetchData(countryCode);
    }
  }

  @Method()
  async fetchData(countryCode: string) { 
    try {
      const query: string = `
        {
          country(code: "${countryCode}") {
            name
            emoji
            continent {
              name
            }
            languages {
              name
              native
            }
          }
        }
      `;

      const response = await fetch("https://countries.trevorblades.com", {
        method: "Post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      const { data: { country } } = await response.json();

      return this.country = country;
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  }

  render() {
    const { country } = this;
    return (
      <div>
        {
          this.country &&
          <div>
            <h3>{country.name} {country.emoji}</h3>
            <h4>{country.continent.name}</h4>
            <ul>
              {
                Object.keys(country.languages).map(l =>
                  <li>
                    {country.languages[l].name} - {country.languages[l].native}
                  </li>
                )
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}