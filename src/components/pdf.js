import {
  Document,
  Font,
  Image,
  Page,
  PDFDownloadLink,
  Text,
  View,
} from "@react-pdf/renderer";

// Font.register({
//   family: "Work Sans",
//   src: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200&display=swap",
//   fontWeight: "200, 300, 700,900",
// });
// Font.register("../components/fonts/Roboto-Thin.ttf", {
//   family: "Roboto",
//   weight: "100,200,300", // or [100, 200, 300]
// });
// Font.register(`https://fonts.googleapis.com/fonts/Roboto-Bold.ttf`, {
//   family: "Roboto",
//   weight: "400,500",
// });

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "http://localhost:3000/fonts/Roboto-Light.ttf",
      fontWeight: 300,
      color: "black", // Also accepts numeric values, ex. 700
    },
    {
      src: "http://localhost:3000/fonts/Roboto-Regular.ttf",
      fontWeight: 400, // Also accepts numeric values, ex. 700
    },
    {
      src: "http://localhost:3000/fonts/Roboto-Bold.ttf",
      fontWeight: 700, // Also accepts numeric values, ex. 700
    },
  ],
});

const MyDoc = ({ info, selectedServices }) => (
  <Document>
    <Page size="a4" style={{ padding: "35px", fontFamily: "Roboto" }}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "10px",
          }}
        >
          <View style={{ flexDirection: "column", width: "65%" }}>
            <Image
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/236572994_398461971630466_605516393644358744_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFopFSP5O0LojpX3q40b94S5Gpr5B2PbuvkamvkHY9u60rOZvYT0zftznjoT1f_wKirth1ENb-0blYso0M6QJ73&_nc_ohc=39umaJbC2p4AX91rnmZ&_nc_oc=AQlAP6SrcFia3WIFVgllNSyl6qPP-tAP62_nefXf-Or1LibN4N9caZi8rioayfTdE14lOjmjz2WcmmbRfTmGwv-U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=254c14cbeef641439b1ae7c02e3c2c3b&oe=61502BDF"
              alt="Logo"
              style={{ height: "50px", width: "220px", marginBottom: "20px" }}
            />
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "6px",
                color: "#6DE039",
              }}
            >
              Richard Son
            </Text>
            <Text
              style={{
                marginBottom: "3px",
                fontSize: "11px",
                letterSpacing: "1px",
                fontWeight: 400,
                color: "black",
              }}
            >
              9070 179 PL
            </Text>
            <Text
              style={{
                marginBottom: "3px",
                fontSize: "11px",
                letterSpacing: "1px",
                fontWeight: 400,
                color: "#000",
              }}
            >
              Jamaica AV
            </Text>
            <Text
              style={{
                marginBottom: "3px",
                fontSize: "11px",
                letterSpacing: "1px",
                fontWeight: 400,
                color: "#000",
              }}
            >
              New York
            </Text>
            <Text
              style={{
                marginBottom: "1px",
                fontSize: "11px",
                fontWeight: 400,
                color: "#000",
              }}
            >
              11432
            </Text>
            <Text
              style={{
                marginTop: "30px",
                marginBottom: "10px",
                color: "#ff9f26",
                fontSize: "14px",
                letterSpacing: "2px",
                fontWeight: 400,
              }}
            >
              AMAZON FBA CONSULTANT
            </Text>
            <Text
              style={{
                marginBottom: "5px",
                fontSize: "11px",
                letterSpacing: "1px",
              }}
            >
              <Text style={{ fontWeight: 400 }}>SKYPE:</Text> virtualexpertsltd
            </Text>
            <Text
              style={{
                marginBottom: "5px",
                fontSize: "11px",
                letterSpacing: "1px",
              }}
            >
              <Text style={{ fontWeight: 400 }}>PHONE:</Text> +13473528622
            </Text>
          </View>
          {/* right part */}
          <View
            style={{
              flexDirection: "column",

              width: "35%",
            }}
          >
            <Image
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/235561233_519976809302774_7008316821987883769_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF6EPJar5jOkYA8k_IdhRd7j2j3AdLwew6PaPcB0vB7DuSWgCuUp9JPGx_PCamz6GjMZ8_XvfKobfktX8_xOjhD&_nc_ohc=LKh6J8PA7oMAX-rMMqD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=6205ab8005f6c16f3af639409d208dd2&oe=614FEE73"
              alt="logo"
              style={{
                height: "80px",
                width: "80px",
                display: "block",
                marginLeft: "auto",
                marginRight: "60px",
              }}
            />
            <Text
              style={{
                fontSize: "32px",
                fontWeight: "bolder",
                color: "#3EB2FF",
                textAlign: "right",
                margin: "15px 40px 15px 0px",
                fontWeight: 700,
                fontFamily: "Roboto",
              }}
            >
              INVOICE
            </Text>
            <Text style={{ fontSize: "12px", marginBottom: "5px" }}>
              <Text
                style={{
                  color: "#3EB2FF",
                  fontWeight: "700",
                  fontSize: "12px",
                }}
              >
                DATE:
              </Text>{" "}
              {info.date}
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <Text
                style={{
                  color: "#3EB2EF",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                INVOICE NO:
              </Text>{" "}
              {info.invoiceNo}
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#3EB2EF",
                letterSpacing: "2px",
                marginTop: "20px",
              }}
            >
              CLIENT INFORMATION
            </Text>
            <Text
              style={{
                fontSize: "12px",
                margin: "5px 0",
                letterSpacing: "1px",
              }}
            >
              Name: <Text style={{ color: "#3EB2EF" }}>{info.clientName}</Text>
            </Text>
            <Text
              style={{
                fontSize: "12px",
                margin: "5px 0",
                letterSpacing: "1px",
              }}
            >
              EMAIL: {info.clientEmail}
            </Text>
            <Text
              style={{
                fontSize: "12px",
                margin: "5px 0",
                letterSpacing: "1px",
                lineHeight: "1px",
              }}
            >
              ADDRESS: {info.clientAddress}
            </Text>
          </View>
        </View>
        {/* 1st part end */}
        <View>
          {/* loop will be continue here */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#3EB2EF",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                Amazon FBA Services
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                QTY
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                PRICE
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                TOTAL
              </Text>
            </View>
          </View>
          {/* loop will be continue here */}
          {selectedServices.map((service, index) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10px",
                padding: "10px",
                backgroundColor: `${
                  (index + 1) % 2 === 0 ? "#F7F6F2" : "white"
                }`,
              }}
              key={index}
            >
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                  }}
                >
                  {service}
                </Text>
              </View>
              {/* <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: "11px",
                    letterSpacing: "1px",
                  }}
                >
                  QTY
                </Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: "11px",
                    letterSpacing: "1px",
                  }}
                >
                  PRICE
                </Text>
              </View> */}
              {/* <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: "11px",
                    letterSpacing: "1px",
                  }}
                >
                  TOTAL
                </Text>
              </View> */}
            </View>
          ))}
        </View>
        {/* 2nd part end */}

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <View style={{ flexDirection: "column", width: "70%" }}>
              <Text
                style={{
                  fontSize: "14px",
                  paddingTop: "15px",
                  letterSpacing: "1px",
                }}
              >
                Please check this invoice & complete the payment
              </Text>
            </View>
            {/* subtotal part  */}
            <View style={{ flexDirection: "column", width: "30%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: "12px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                    }}
                  >
                    Sub Total:{" "}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: "12px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                    }}
                  >
                    $432
                  </Text>
                </View>
              </View>
              {/* tax part */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: "12px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                    }}
                  >
                    Tax (5%):
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: "12px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                    }}
                  >
                    $10
                  </Text>
                </View>
              </View>
              {/* grand total part */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: "12px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                    }}
                  >
                    GRAND TOTAL:
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: "12px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                    }}
                  >
                    $532
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
        </View>
        {/* 4th part start here */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "30px 0px",
          }}
        >
          <View style={{ width: "80%", marginTop: "20px" }}>
            <Text style={{ fontSize: "12px" }}>
              {" "}
              <Text
                style={{
                  fontSize: "12px",
                  marginBottom: "4px",
                  letterSpacing: "1px",
                }}
              >
                Questions?
              </Text>
            </Text>
            <Text
              style={{
                fontSize: "12px",
                letterSpacing: "1px",
              }}
            >
              {" "}
              <Text style={{ fontSize: "12px", marginBottom: "4px" }}>
                Email us at help@virtualexperts.net
              </Text>
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginBottom: "4px",
                letterSpacing: "1px",
              }}
            >
              or call us at ++1 347 352 8622
            </Text>
          </View>
          <View style={{ width: "20%", textAlign: "right" }}>
            <Text style={{ fontSize: "33px" }}>Thank</Text>
            <Text style={{ fontSize: "33px" }}>YOU!</Text>
          </View>
        </View>

        {/* footer part */}
        <View style={{ borderTop: "2px solid #3EB2EF" }}>
          <Text
            style={{
              padding: "10px 20px",
              fontSize: "13px",
              letterSpacing: "1px",
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            9070179 PL Jamaica AV, New York 11432 • www.virtualexperts.net
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

const MyDocument = ({ info, selectedServices }) => (
  <div>
    <PDFDownloadLink
      document={<MyDoc info={info} selectedServices={selectedServices} />}
      fileName="somename.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

export default MyDocument;
