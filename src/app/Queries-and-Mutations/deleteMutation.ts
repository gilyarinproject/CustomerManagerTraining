import gql from "graphql-tag";

export const deleteMutation = gql`
        mutation($id: Int!) {
          deleteCustomer(id: $id)
        }
    `;
