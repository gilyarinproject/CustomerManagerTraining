import gql from "graphql-tag";

export const customersQuery = gql`
        query customers {
          customers {
            firstName
            lastName
            address {
              city
              country
            }
            id
            gender
            orders {
              itemName
              itemPrice
            }
          }
        }
      `;
