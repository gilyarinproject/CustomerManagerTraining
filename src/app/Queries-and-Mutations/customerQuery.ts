import gql from "graphql-tag";

export const customerQuery = gql`
        query customer($id: Int!) {
          customer(id: $id) {
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
