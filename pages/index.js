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
      <Heading>Announcement Bar</Heading>
      <div className="container">
        <h2 className="title">
          To enable this app in your theme just clik the button bellow{" "}
        </h2>

        <img
          src="https://i.ibb.co/whZ1M7W/screenbud-1cc27f3e-84ab-4aab-9104-9a185389f8ac.png"
          alt="enable guide"
          width={500}
          height={300}
        />
      </div>
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
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          padding: 50px;
          text-align: center;
          font-size: large;
          font-family: fangsong;
          border-radius: 91px;
          background: #0a8954;
    border-radius: 91px;
    color: white;
    margin-bottom: 20px;
        }
        .btn {
          padding: 17px 62px;
          color: black;
          cursor: pointer;
          border: none;
          border-radius: 30px;
          background: darkgreen;
          color: white;
          font-size: 19px;
          font-family: math;
        }
        .btn_container {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </Page>
  );
}
