import {
  Document,
  Font,
  Image,
  Page,
  PDFDownloadLink,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://virtual-expert.vercel.app/fonts/Roboto-Light.ttf",
      fontWeight: 300,
      color: "black", // Also accepts numeric values, ex. 700
    },
    {
      src: "https://virtual-expert.vercel.app/fonts/Roboto-Regular.ttf",
      fontWeight: 400, // Also accepts numeric values, ex. 700
    },
    {
      src: "https://virtual-expert.vercel.app/fonts/Roboto-Bold.ttf",
      fontWeight: "700, 900", // Also accepts numeric values, ex. 700
    },
  ],
});

const MyDoc = ({ info, selectedServices }) => (
  <Document>
    <Page
      size="a4"
      style={{ padding: "35px 35px 0px 35px", fontFamily: "Roboto" }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "10px",
          }}
        >
          <View style={{ flexDirection: "column", width: "60%" }}>
            <Image
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/236572994_398461971630466_605516393644358744_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFopFSP5O0LojpX3q40b94S5Gpr5B2PbuvkamvkHY9u60rOZvYT0zftznjoT1f_wKirth1ENb-0blYso0M6QJ73&_nc_ohc=39umaJbC2p4AX91rnmZ&_nc_oc=AQlAP6SrcFia3WIFVgllNSyl6qPP-tAP62_nefXf-Or1LibN4N9caZi8rioayfTdE14lOjmjz2WcmmbRfTmGwv-U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=254c14cbeef641439b1ae7c02e3c2c3b&oe=61502BDF"
              alt="Logo"
              style={{ height: "50px", width: "220px", marginBottom: "20px" }}
            />
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "4px",
                color: "#FFAC45",
              }}
            >
              Richard Son
            </Text>
            <Text
              style={{
                marginBottom: "2px",
                fontSize: "11px",
                letterSpacing: "1px",
                fontWeight: 300,
              }}
            >
              9070 179 PL
            </Text>
            <Text
              style={{
                marginBottom: "2px",
                fontSize: "11px",
                letterSpacing: "1px",
                fontWeight: 300,
              }}
            >
              Jamaica AV
            </Text>
            <Text
              style={{
                marginBottom: "2px",
                fontSize: "11px",
                letterSpacing: "1px",
                fontWeight: 300,
              }}
            >
              New York
            </Text>
            <Text
              style={{
                fontSize: "11px",
                fontWeight: 300,
              }}
            >
              11432
            </Text>
            <Text
              style={{
                marginTop: "20px",
                marginBottom: "10px",
                color: "#FFAC45",
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
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                SKYPE:
              </Text>{" "}
              <Text style={{ paddingLeft: "10px", fontWeight: 300 }}>
                virtualexpertsltd
              </Text>
            </Text>
            <Text
              style={{
                marginBottom: "5px",
                fontSize: "11px",
                letterSpacing: "1px",
              }}
            >
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                PHONE:
              </Text>{" "}
              <Text style={{ marginLeft: "100px", fontWeight: 300 }}>
                +13473528622
              </Text>
            </Text>
          </View>
          {/* right part */}
          <View
            style={{
              flexDirection: "column",

              width: "40%",
            }}
          >
            <Image
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/235561233_519976809302774_7008316821987883769_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF6EPJar5jOkYA8k_IdhRd7j2j3AdLwew6PaPcB0vB7DuSWgCuUp9JPGx_PCamz6GjMZ8_XvfKobfktX8_xOjhD&_nc_ohc=LKh6J8PA7oMAX-rMMqD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=6205ab8005f6c16f3af639409d208dd2&oe=614FEE73"
              alt="logo"
              style={{
                height: "80px",
                width: "80px",
                display: "block",
                marginLeft: "30px",
              }}
            />
            <Text
              style={{
                fontSize: "32px",
                fontWeight: "bolder",
                color: "#FFAC45",
                textAlign: "left",
                margin: "15px 40px 15px 0px",
                fontWeight: 900,
                fontFamily: "Roboto",
                letterSpacing: "2px",
              }}
            >
              INVOICE
            </Text>
            <Text style={{ fontSize: "12px", marginBottom: "5px" }}>
              <Text
                style={{
                  color: "#FFAC45",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                DATE:
              </Text>{" "}
              <Text style={{ fontWeight: 300, fontSize: "11px" }}>
                {info.date}
              </Text>
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <Text
                style={{
                  color: "#FFAC45",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                INVOICE NO:
              </Text>{" "}
              <Text style={{ fontWeight: 300, fontSize: "11px" }}>
                {info.invoiceNo}
              </Text>
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#FFAC45",
                letterSpacing: "2px",
                marginTop: "20px",
                marginBottom: "3px",
              }}
            >
              CLIENT INFORMATION
            </Text>
            <Text
              style={{
                fontSize: "11px",
                margin: "2px 0",
                letterSpacing: "1px",
              }}
            >
              NAME: <Text style={{ color: "#FFAC45" }}>{info.clientName}</Text>
            </Text>
            <Text
              style={{
                fontSize: "11px",
                margin: "2px 0",
                letterSpacing: "1px",
              }}
            >
              EMAIL:{" "}
              <Text style={{ fontSize: "10px", fontWeight: 300 }}>
                {info.clientEmail}
              </Text>
            </Text>
            <Text
              style={{
                fontSize: "11px",
                margin: "2px 0",
                letterSpacing: "1px",
                lineHeight: "1px",
              }}
            >
              ADDRESS:
              <Text style={{ fontSize: "11px", fontWeight: 300 }}>
                {info.clientAddress}
              </Text>
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
              backgroundColor: "#FFAC45",
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
            </View>
          ))}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "10px",
              padding: "10px",
              borderBottom: "2px solid #F7F6F2",
            }}
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
                  color: "#fff",
                }}
              >
                Order Info of your order
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                {info.quantity}
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                ${info.price}
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                ${info.total}
              </Text>
            </View>
          </View>
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
                  fontWeight: 300,
                }}
              >
                Please check this invoice & complete the
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  fontWeight: 300,
                }}
              >
                payment
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
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      fontSize: "11px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                      fontWeight: 300,
                      textAlign: "right",
                    }}
                  >
                    Subtotal
                  </Text>
                </View>
                <View style={{ width: "40%" }}>
                  <Text
                    style={{
                      fontSize: "11px",
                      margin: "3px 0px 3px 15px",
                      letterSpacing: "1px",
                      fontWeight: 300,
                      textAlign: "right",
                    }}
                  >
                    ${info.subTotal}
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
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      fontSize: "11px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                      fontWeight: 300,
                      textAlign: "right",
                    }}
                  >
                    Tax ({info.taxPercentage}%)
                  </Text>
                </View>
                <View style={{ width: "40%" }}>
                  <Text
                    style={{
                      fontSize: "11px",
                      margin: "3px 0px 3px 15px",
                      letterSpacing: "1px",
                      fontWeight: 300,
                      textAlign: "right",
                    }}
                  >
                    ${info.tax}
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
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      fontSize: "11px",
                      margin: "3px 0px",
                      letterSpacing: "1px",
                      fontWeight: 300,
                      textAlign: "right",
                    }}
                  >
                    GRAND TOTAL
                  </Text>
                </View>
                <View style={{ width: "40%" }}>
                  <Text
                    style={{
                      fontSize: "11px",
                      margin: "3px 0px 3px 15px",
                      letterSpacing: "1px",
                      fontWeight: 300,
                      textAlign: "right",
                    }}
                  >
                    ${info.grandTotal}
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
            <Text style={{ fontSize: "12px", fontWeight: 300 }}>
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
                fontWeight: 300,
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
                fontWeight: 300,
              }}
            >
              <Text style={{ fontSize: "12px", marginBottom: "4px" }}>
                or call us at ++1 347 352 8622
              </Text>
            </Text>
          </View>
          <View style={{ width: "20%", textAlign: "right" }}>
            <Text
              style={{ fontSize: "33px", fontWeight: 700, color: "#525352" }}
            >
              THANK
            </Text>
            <Text
              style={{ fontSize: "33px", fontWeight: 700, color: "#525352" }}
            >
              YOU!
            </Text>
          </View>
        </View>

        {/* footer part */}
        <View style={{ borderTop: "2px solid #FFAC45" }}>
          <Text
            style={{
              padding: "10px 20px",
              fontSize: "12px",
              letterSpacing: "1px",
              fontWeight: 300,
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

const MyDocument = ({ info, selectedServices, handelClear }) => (
  <div className="btn btn-success" onClick={handelClear}>
    <PDFDownloadLink
      document={<MyDoc info={info} selectedServices={selectedServices} />}
      fileName={`${info.clientName}.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download Now"
      }
    </PDFDownloadLink>
  </div>
);

export default MyDocument;
