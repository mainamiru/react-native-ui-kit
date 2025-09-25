import { MobileView } from "@/mobile";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Row,
  Text,
} from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>React Native UI Kit</Text>
        <Text style={styles.heroSubtitle}>
          Accelerate your mobile app development with prebuilt, customizable
          components
        </Text>
        <Text style={styles.heroDescription}>
          A complete design system with TypeScript support, modern aesthetics,
          and seamless integration
        </Text>
        <View style={styles.heroActions}>
          <Button
            onPress={() => router.push("/docs")}
            style={styles.primaryButton}
            mode="contained"
          >
            View Components
          </Button>
          <Button
            onPress={() => router.push("/docs")}
            mode="outlined"
            style={styles.secondaryButton}
          >
            Get Started
          </Button>
        </View>
      </View>

      {/* Component Showcase */}
      <View style={styles.showcaseSection}>
        <Text style={styles.sectionTitle}>Featured Components</Text>
        <Text style={styles.sectionSubtitle}>
          Explore our comprehensive collection of UI components
        </Text>

        <View style={styles.showcaseGrid}>
          {/* Button Showcase */}
          <Card style={styles.showcaseCard}>
            <Card.Content>
              <View style={styles.componentDemo}>
                <Text style={styles.componentTitle}>Buttons</Text>
                <View style={styles.buttonRow}>
                  <Button mode="text">Default</Button>
                  <Button mode="contained">Contained</Button>
                  <Button mode="outlined">Outlined</Button>
                </View>
                <View style={styles.buttonRow}>
                  <Button mode="text" disabled>
                    Disabled
                  </Button>
                  <Button mode="contained" buttonColor="#10B981">
                    Success
                  </Button>
                </View>
              </View>
            </Card.Content>
          </Card>

          {/* Avatar Showcase */}
          <Card style={styles.showcaseCard}>
            <Card.Content>
              <View style={styles.componentDemo}>
                <Text style={styles.componentTitle}>Avatars</Text>
                <Row gap={10} alignItems="center" justifyContent="center">
                  <Avatar fallback="JD" />
                  <Avatar fallback="AB" />
                  <Avatar fallback="XY" />
                </Row>
                <View style={{ marginTop: 10 }}>
                  <Row gap={10} alignItems="center" justifyContent="center">
                    <Avatar source="https://via.placeholder.com/48" />
                    <Avatar fallback="?" backgroundColor="#4F46E5" />
                  </Row>
                </View>
              </View>
            </Card.Content>
          </Card>

          {/* Badge Showcase */}
          <Card style={styles.showcaseCard}>
            <Card.Content>
              <View style={styles.componentDemo}>
                <Text style={styles.componentTitle}>Badges</Text>
                <Row
                  gap={8}
                  alignItems="center"
                  justifyContent="center"
                  flexWrap="wrap"
                >
                  <Badge>Default</Badge>
                  <Badge backgroundColor="#10B981">Success</Badge>
                  <Badge backgroundColor="#F59E0B">Warning</Badge>
                  <Badge backgroundColor="#EF4444">Error</Badge>
                </Row>
                <View style={{ marginTop: 10 }}>
                  <Row
                    gap={8}
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                  >
                    <Badge backgroundColor="#6B7280" color="#fff">
                      Gray
                    </Badge>
                    <Badge backgroundColor="#8B5CF6" color="#fff">
                      Purple
                    </Badge>
                  </Row>
                </View>
              </View>
            </Card.Content>
          </Card>

          {/* Card Showcase */}
          <Card style={styles.showcaseCard}>
            <Card.Content>
              <View style={styles.componentDemo}>
                <Text style={styles.componentTitle}>Cards</Text>
                <Card style={styles.nestedCard}>
                  <Card.Content>
                    <Text style={styles.cardTitle}>Sample Card</Text>
                    <Text style={styles.cardDescription}>
                      This is an example of a nested card component with content
                    </Text>
                  </Card.Content>
                </Card>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Why Choose Our UI Kit?</Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>⚡</Text>
            <Text style={styles.featureTitle}>Fast Development</Text>
            <Text style={styles.featureDescription}>
              Prebuilt components accelerate your development process
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🎨</Text>
            <Text style={styles.featureTitle}>Modern Design</Text>
            <Text style={styles.featureDescription}>
              Clean, modern aesthetics that follow design best practices
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📱</Text>
            <Text style={styles.featureTitle}>Responsive</Text>
            <Text style={styles.featureDescription}>
              Optimized for all screen sizes and device types
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🔧</Text>
            <Text style={styles.featureTitle}>Customizable</Text>
            <Text style={styles.featureDescription}>
              Easily customize components to match your brand
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📚</Text>
            <Text style={styles.featureTitle}>TypeScript</Text>
            <Text style={styles.featureDescription}>
              Full TypeScript support for better development experience
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🚀</Text>
            <Text style={styles.featureTitle}>Production Ready</Text>
            <Text style={styles.featureDescription}>
              Battle-tested components ready for production apps
            </Text>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
        <Text style={styles.ctaDescription}>
          Explore our comprehensive documentation and start building amazing
          apps
        </Text>
        <Button
          onPress={() => router.push("/docs")}
          style={styles.ctaButton}
          mode="contained"
        >
          Browse Documentation
        </Button>
      </View>

      {/* Mobile View */}
      <View style={styles.mobileViewSection}>
        <MobileView>
          <View style={styles.mobileContent}>
            <Text style={styles.mobileTitle}>Mobile Preview</Text>
            <Text style={styles.mobileDescription}>
              See how components look on mobile devices
            </Text>
            <Button onPress={() => router.push("/docs")} mode="text">
              View Docs
            </Button>
          </View>
        </MobileView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heroSection: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "#f8fafc",
    paddingBottom: 60,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#1e293b",
  },
  heroSubtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
    color: "#475569",
    maxWidth: 600,
  },
  heroDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
    color: "#64748b",
    maxWidth: 500,
  },
  heroActions: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
  },
  secondaryButton: {
    borderColor: "#3b82f6",
    borderWidth: 1,
  },
  showcaseSection: {
    padding: 40,
    paddingTop: 60,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#1e293b",
  },
  sectionSubtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "#64748b",
  },
  showcaseGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "center",
  },
  showcaseCard: {
    minWidth: 280,
    maxWidth: 350,
    flex: 1,
  },
  componentDemo: {
    alignItems: "center",
    padding: 20,
  },
  componentTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    color: "#1e293b",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  nestedCard: {
    width: "100%",
    maxWidth: 250,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1e293b",
  },
  cardDescription: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
  featuresSection: {
    padding: 40,
    backgroundColor: "#f8fafc",
    paddingTop: 60,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "center",
  },
  featureItem: {
    alignItems: "center",
    maxWidth: 280,
    flex: 1,
    minWidth: 250,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#1e293b",
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 20,
  },
  ctaSection: {
    padding: 40,
    alignItems: "center",
    paddingTop: 60,
  },
  ctaTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#1e293b",
  },
  ctaDescription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
    color: "#64748b",
    maxWidth: 500,
  },
  ctaButton: {
    backgroundColor: "#3b82f6",
  },
  mobileViewSection: {
    padding: 20,
    alignItems: "center",
  },
  mobileContent: {
    alignItems: "center",
    padding: 20,
  },
  mobileTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#1e293b",
  },
  mobileDescription: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
