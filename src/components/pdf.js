import {
  Document,
  Font,
  Image,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Work Sans",
  src: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
});

const styles = StyleSheet.create({
  displayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "50%",
  },
});

const MyDoc = () => (
  <Document>
    <Page size="a4" style={{ padding: "20px" }}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "column", width: "70%" }}>
            <Image
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/236572994_398461971630466_605516393644358744_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFopFSP5O0LojpX3q40b94S5Gpr5B2PbuvkamvkHY9u60rOZvYT0zftznjoT1f_wKirth1ENb-0blYso0M6QJ73&_nc_ohc=39umaJbC2p4AX91rnmZ&_nc_oc=AQlAP6SrcFia3WIFVgllNSyl6qPP-tAP62_nefXf-Or1LibN4N9caZi8rioayfTdE14lOjmjz2WcmmbRfTmGwv-U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=254c14cbeef641439b1ae7c02e3c2c3b&oe=61502BDF"
              alt="Logo"
              style={{ height: "50px", width: "120px" }}
            />
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#6DE039",
              }}
            >
              Richard Sid
            </Text>
            <Text style={{ marginBottom: "5px", fontSize: "11px" }}>
              9070 179 PL
            </Text>
            <Text style={{ marginBottom: "5px", fontSize: "11px" }}>
              Jamaica AV
            </Text>
            <Text style={{ marginBottom: "5px", fontSize: "11px" }}>
              New York
            </Text>
            <Text style={{ marginBottom: "5px", fontSize: "11px" }}>11432</Text>
            <Text
              style={{
                marginTop: "30px",
                marginBottom: "10px",
                color: "#3EB2FF",
                fontSize: "14px",
              }}
            >
              AMAZON FBA CONSULTANT
            </Text>
            <Text style={{ marginBottom: "5px", fontSize: "11px" }}>
              SKYPE: virtualexpertsltd
            </Text>
            <Text style={{ marginBottom: "5px", fontSize: "11px" }}>
              PHONE: +1 347 352 8622
            </Text>
          </View>
          {/* right part */}
          <View
            style={{
              flexDirection: "column",
              textAlign: "right",
              width: "30%",
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
              }}
            />
            <Text
              style={{
                fontSize: "28px",
                fontWeight: "900",
                color: "#3EB2FF",
                margin: "15px 0px",
              }}
            >
              INVOICE
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <Text
                style={{
                  color: "#3EB2FF",
                  fontWeight: "700",
                  fontSize: "12px",
                }}
              >
                DATE:
              </Text>{" "}
              AUGUEST 10, 2021
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
              FR+DE 01
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#3EB2EF",
                letterSpacing: "2px",
                marginTop: "10px",
              }}
            >
              CLIENT INFORMATION
            </Text>
            <Text style={{ fontSize: "12px" }}>Name: Vitamin T</Text>
            <Text style={{ fontSize: "12px" }}>EMAIL: business@gmail.com</Text>
            <Text style={{ fontSize: "12px" }}>
              ADRESS: Jisperveldstraat 274 AMSTERDAM Netherlands 1024AN
              Netherlands
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
              <Text style={{ color: "#fff", fontSize: "11px" }}>
                Amazon FBA Services
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "#fff", fontSize: "11px" }}>QTY</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "#fff", fontSize: "11px" }}>PRICE</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "#fff", fontSize: "11px" }}>TOTAL</Text>
            </View>
          </View>
          {/* loop will be continue here */}
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
            <View style={{ flexDirection: "column", width: "55%" }}>
              <Text style={{ fontSize: "11px" }}>
                Please check this invoice & complete the payment
              </Text>
            </View>
            {/* subtotal part  */}
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontSize: "11px" }}>Tax (5%)</Text>
                </View>
                <View>
                  <Text style={{ fontSize: "11px" }}>$10</Text>
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
                  <Text style={{ fontSize: "11px" }}>Tax (5%)</Text>
                </View>
                <View>
                  <Text style={{ fontSize: "11px" }}>$10</Text>
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
                  <Text style={{ fontSize: "11px" }}>GRAND TOTAL</Text>
                </View>
                <View>
                  <Text style={{ fontSize: "11px" }}>$532</Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
        </View>
        {/* 4th part start here */}
      </View>
    </Page>
  </Document>
);

const MyDocument = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

export default MyDocument;
