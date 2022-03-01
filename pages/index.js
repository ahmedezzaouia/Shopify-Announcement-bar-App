import { Heading, Page } from "@shopify/polaris";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const shopQuery = gql`
  {
    shop {
      name
      myshopifyDomain
    }
  }
`;
export default function Index() {
  return (
    <Page>
      <Heading>Announcemnet Bar</Heading>
      <h2 className="title">
        To enable this app in your theme just clik the button bellow{" "}
      </h2>
      <Query query={shopQuery}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading…</div>;
          if (error) return <div>{error.message}</div>;
          console.log(data);
          const url = `https://${data.shop.myshopifyDomain}/admin/themes/current/editor?context=apps&template=index&activateAppId=6566285/announcemnet-bar_embeded`;
          return (
            <div className="btn_container">
              <button
                className="btn"
                onClick={() => {
                  window.open(url, "_blank");
                }}
              >
                Start Editing App   
              </button>
            </div>
          );
        }}
      </Query>

      <style jsx>{`
        .title {
          padding: 20px;
          text-align: center;
          font-size: large;
          font-family: fangsong;

        }
        .btn {
          padding: 10px 22px;
          color: blue;
          cursor: pointer;
        }
        .btn_container{
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </Page>
  );
}
