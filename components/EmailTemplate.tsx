import { APP_URL } from "@/lib/utils";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Link,
  Img,
} from "@react-email/components";
type FormDataType = {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
};

export type EmailTemplateProps = {
  data: FormDataType;
  companyName?: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  showLogo?: boolean;
};

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  data,
  companyName = "Al Nimra Movers",
  logoUrl = `${APP_URL}/logo-1.svg`,
  primaryColor = "#fd5b09",
  secondaryColor = "#114e54",
  textColor = "#858585",
  showLogo = true,
}) => {
  const { name, phone, movingFrom, movingTo } = data;

  // Custom typography style presets conforming to constraints
  const mainStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: "#f9fafb",
    color: textColor,
    padding: "40px 0",
  };

  const containerStyle = {
    backgroundColor: "#ffffff",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    borderRadius: "16px",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
    width: "100%",
    maxWidth: "580px",
    margin: "0 auto",
    overflow: "hidden",
  };

  const topBannerStyle = {
    backgroundColor: primaryColor,
    height: "6px",
    width: "100%",
  };

  const contentPadding = {
    padding: "32px 40px 40px 40px",
  };

  const tagLineStyle = {
    color: primaryColor,
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "4px",
    fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
  };

  const h1Style = {
    color: secondaryColor,
    fontSize: "24px",
    fontWeight: "800",
    lineHeight: "1.25",
    letterSpacing: "-0.02em",
    margin: "0 0 16px 0",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  const introParagraph = {
    color: textColor,
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "0 0 24px 0",
  };

  // Modern Route Details Styling (The Journey)
  const journeyCardStyle = {
    backgroundColor: "#fafafa",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    padding: "24px",
    marginBottom: "28px",
  };

  const nodeHeaderStyle = {
    fontSize: "10px",
    fontWeight: "700",
    textTransform: "uppercase" as const,
    color: primaryColor,
    letterSpacing: "0.08em",
    marginBottom: "4px",
    fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
  };

  const nodeValueStyle = {
    fontSize: "15px",
    fontWeight: "700",
    color: secondaryColor,
    lineHeight: "1.4",
    margin: "0",
  };

  // Table information grid styles
  const tableHeaderStyle = {
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase" as const,
    color: secondaryColor,
    padding: "10px 12px",
    textAlign: "left" as const,
    backgroundColor: "#f4f4f5",
    borderRadius: "4px",
  };

  const tableLabelStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: secondaryColor,
    padding: "12px 12px",
    borderBottomWidth: "1px",
    borderStyle: "solid" as const,
    borderColor: "#f3f4f6",
    width: "120px",
  };

  const tableValueStyle = {
    fontSize: "13px",
    color: textColor,
    padding: "12px 12px",
    borderBottomWidth: "1px",
    borderStyle: "solid" as const,
    borderColor: "#f3f4f6",
  };

  // Message callout
  const messageBoxStyle = {
    backgroundColor: "#ffffff",
    borderLeftWidth: "4px",
    borderLeftStyle: "solid" as const,
    borderLeftColor: primaryColor,
    borderRadius: "0 8px 8px 0",
    padding: "16px 20px",
    marginTop: "24px",
    marginBottom: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
    borderWidth: "1px 1px 1px 4px",
    borderStyle: "solid" as const,
    borderColor: "#f3f4f6 #f3f4f6 #f3f4f6 " + primaryColor,
  };

  const messageLabelStyle = {
    fontSize: "12px",
    fontWeight: "700",
    color: secondaryColor,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: "6px",
    marginTop: "0",
  };

  const messageTextStyle = {
    fontSize: "13px",
    lineHeight: "1.5",
    color: textColor,
    margin: "0",
    fontStyle: "italic",
  };

  // Button styles
  const btnStyle = {
    backgroundColor: primaryColor,
    color: "#ffffff",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "700",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "14px 28px",
    marginTop: "16px",
    marginBottom: "16px",
    WebkitFontSmoothing: "antialiased",
  };

  const footerStyle = {
    textAlign: "center" as const,
    padding: "32px 40px",
    backgroundColor: secondaryColor,
    color: "#a3a3a3",
  };

  const footerTextStyle = {
    fontSize: "12px",
    lineHeight: "1.6",
    color: "#a3a3a3",
    margin: "0 0 12px 0",
  };

  const footerLinkStyle = {
    color: "#ffffff",
    textDecoration: "underline",
    fontSize: "12px",
    fontWeight: "600",
  };

  return (
    <Html lang="en">
      <Head />
      <Preview>Al Nimra Movers Relocation Booking details for {name}</Preview>
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Top colored aesthetic strip */}
          <div style={topBannerStyle} />

          {/* Email Body Core */}
          <div style={contentPadding}>
            {/* Logo/Header */}
            <table style={{ width: "100%", marginBottom: "32px" }}>
              <tbody>
                <tr>
                  <td>
                    {showLogo ? (
                      <Img
                        src={logoUrl}
                        width="140"
                        height="auto"
                        alt={companyName}
                        style={{ display: "block", marginBottom: "8px" }}
                      />
                    ) : (
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "800",
                          color: secondaryColor,
                        }}
                      >
                        {companyName}
                      </span>
                    )}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span style={tagLineStyle}>Booking Request</span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Introductory Header */}
            <Heading style={h1Style}>Relocation Inquiry Received</Heading>
            <Text style={introParagraph}>
              Mr. <strong>{name}</strong>, contact you for moving quote. Below
              are the details of their request. Please review and reach out to
              them promptly to assist with their moving needs.
            </Text>

            {/* The Moving Journey Road blocks */}
            <div style={journeyCardStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "top", width: "45%" }}>
                      <div style={nodeHeaderStyle}> Moving From</div>
                      <div style={nodeValueStyle}>
                        {movingFrom || "Not Specified"}
                      </div>
                    </td>
                    <td
                      style={{
                        verticalAlign: "middle",
                        textAlign: "center",
                        width: "10%",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "18px",
                          color: primaryColor,
                          fontWeight: "800",
                        }}
                      >
                        ➔
                      </span>
                    </td>
                    <td style={{ verticalAlign: "top", width: "45%" }}>
                      <div style={nodeHeaderStyle}> Moving To</div>
                      <div style={nodeValueStyle}>
                        {movingTo || "Not Specified"}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Core Details Table */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "24px",
              }}
            >
              <thead>
                <tr>
                  <th colSpan={2} style={tableHeaderStyle}>
                    Contact & Logistics Summary
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableLabelStyle}>Customer Name</td>
                  <td style={tableValueStyle}>
                    <strong>{name}</strong>
                  </td>
                </tr>
                <tr>
                  <td style={tableLabelStyle}>Phone</td>
                  <td style={tableValueStyle}>
                    <Link
                      href={`tel:${phone}`}
                      style={{
                        color: secondaryColor,
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      {phone}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Client Notes Section */}

            {/* Action Call for Client */}
            <div
              style={{
                textAlign: "center",
                marginTop: "32px",
                marginBottom: "8px",
              }}
            >
              <Link href={`tel:${phone}`} style={btnStyle}>
                📞 Call Customer Directly
              </Link>
            </div>
          </div>

          {/* Clean Modern Footer */}
          <div style={footerStyle}>
            <Text style={footerTextStyle}>
              <strong>Al Nimra Movers</strong>
              <br />
              Dubai, United Arab Emirates
            </Text>
            <Text
              style={{ ...footerTextStyle, fontSize: "11px", opacity: 0.8 }}
            >
              This is an automated request acknowledgment. Our typical quote
              response time is under 15 minutes during operational hours (8:00
              AM - 10:00 PM).
            </Text>
            <Hr style={{ borderColor: "#4b4a57", margin: "18px 0" }} />
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <Link href={`${APP_URL}`} style={footerLinkStyle}>
                      Visit Website
                    </Link>
                    <span style={{ color: "#4b4a57", margin: "0 10px" }}>
                      |
                    </span>
                    <Link
                      href="mailto:nimramovers@gmail.com"
                      style={footerLinkStyle}
                    >
                      Email Support
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Body>
    </Html>
  );
};
export default EmailTemplate;
