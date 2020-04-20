import gql from "graphql-tag";

export const updateMutation = gql`
    mutation($id: Int!, $customerDetails: CustomerInput) {
      updateCustomer(id: $id, customerDetails: $customerDetails) {
         firstName
         lastName
      }
    }
    `;
