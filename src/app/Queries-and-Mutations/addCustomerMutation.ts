import gql from "graphql-tag";

export const addCustomerMutation = gql`
      mutation($details: NewCustomerInput!) {
        createCustomer(customerDetails: $details) {
          firstName
          lastName
          id
          address {
            city
            country
          }
          gender
        }
      }
    `;
