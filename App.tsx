/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { WebView } from "react-native-webview";

export default function App() {
  const [showRecipe, setShowRecipe] = useState(false);

  const recipe = {
    name: 'Jollof Rice',
    description: 'Jollof, or jollof rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, chilis, onions, spices, and sometimes other vegetables and/or meat in a single pot, although its ingredients and preparation methods vary across different regions.',
    videoUrl: 'https://youtube.com/watch?v=9n3Cx7DYuyQ',
    relatedRecipes: ['Fried Rice', 'Basmati Fried Rice', 'Coconut Rice']
  };

  return (
    <View style={styles.container}>
      {!showRecipe ? (
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Welcome to Recipe World</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowRecipe(true)}
              accessibilityLabel="Recipe for You"
            >
              <Text style={styles.buttonText}>Recipe for You</Text>
            </TouchableOpacity>
          </View>
        </Card>
      ) : (
        <ScrollView style={styles.recipeContainer}>
          <Card style={styles.recipeCard}>
            <View style={styles.cardContent}>
              <Text style={styles.recipeTitle}>{recipe.name}</Text>
              <Text style={styles.recipeDescription}>{recipe.description}</Text>
              <View style={styles.videoContainer}>
                <WebView
                  source={{ uri: recipe.videoUrl }}
                  style={styles.video}
                  allowsFullscreenVideo
                />
              </View>
            </View>
          </Card>

          <Card style={styles.relatedCard}>
            <View style={styles.cardContent}>
              <Text style={styles.relatedTitle}>Related Recipes</Text>
              {recipe.relatedRecipes.map((relatedRecipe, index) => (
                <Text key={index} style={styles.relatedRecipe}>
                  {relatedRecipe}
                </Text>
              ))}
            </View>
          </Card>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
  },
  cardContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  recipeContainer: {
    width: "100%",
  },
  recipeCard: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
  },
  recipeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 8,
    overflow: "hidden",
  },
  video: {
    flex: 1,
  },
  relatedCard: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  relatedRecipe: {
    fontSize: 16,
    color: "#555",
  },
});
