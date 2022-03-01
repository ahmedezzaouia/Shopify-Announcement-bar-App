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
      <div className="container">
        <h2 className="title">
          To enable this app in your theme just clik the button bellow{" "}
        </h2>

        <img
          src="https://lh3.googleusercontent.com/hFZPWQqWRlydMlFb2PcM0R9T5EiYZiXeZ_Vw-yYoDZXZvZ2GFRFGLpHibn7_lEFq5LyTfpixoT9Q92JCIKa_pT0Gq_Mx2_KxVarXrJ_4oQ89xwXYa2X28BqDGCHS1RppbbVgmqHnsKzg45MPVpYn7zOgRhcmX3ZbNAvsIGM5h_0pRAHfUgBdMbY9bhQj-CTzms1PC2hSNIfprb7cCTkgFAFg7j9-nbGxzi9r4FMYBLcQImajMhLuFAxMl62xxDDLRm8qDHGrPLZLPv-hbNbgyOjMkIx7VHqxjiGZP-LioOjp--91xCDZGtqwiTtMCaAeJwXdHwVZEEOoIfz5DPVEV6tirRHXHcGNM0f5WCF3EgvyxtDYBERnC6_3TTRe8DqfaFLDdL0F5QL7uV5WQM5kcyeJm_KRUoBOAdIiFnGHg2sUGe_wOLqAgEiUw7iqNoZ4N0s1is9z8LIejbtWzb0o-BU-Yf6B8QhezqGlgdi_jkpGEgwhVEjggOaBbx1Iz_Deqpmfvg4_y3PdgysYCpPMlvyLXmGRXE8wDXQYf87HxySiARr-p_w3_bcwG7PAg4kkqNMqVXXYSLZI31q_o2VAdHLdLHIqA-AE3dmXYvYfthswVOyCSZelNiVSn0dj3y_vhpd8Pt_-oZ7jxpH1GnVV9fiiQ1njcOuHsaDWucrHV-RAdvB-FIk3kbwNq6llHp4lpboJtdqUHjqjXh_yd8iJ1zXv=w282-h200-no?authuser=0"
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

      .container{
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
        }
        .btn {
          padding: 10px 22px;
          color: black;
          cursor: pointer;
        }
        .btn_container {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </Page>
  );
}
