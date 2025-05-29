import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [showRecipe, setShowRecipe] = useState(false);

  const recipe = {
    name: "Spaghetti Carbonara",
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    videoUrl: "https://www.youtube.com/watch?v=3AAdKl1UYZs&t=1s",
    relatedRecipes: ["Penne Alfredo", "Chicken Parmesan", "Linguine Pesto"]
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {!showRecipe ? (
        <Card className="p-6 w-full max-w-md text-center">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4">Welcome to Recipe World</h1>
            <Button
              className="bg-blue-500 text-white p-2 rounded-xl"
              onClick={() => setShowRecipe(true)}
              aria-label="Recipe for You"
            >
              Recipe for You
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="w-full max-w-3xl p-4">
          <Card className="mb-6">
            <CardContent>
              <h2 className="text-3xl font-bold mb-2">{recipe.name}</h2>
              <p className="text-gray-700 mb-4">{recipe.description}</p>
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <iframe
                  className="w-full h-full"
                  src={recipe.videoUrl}
                  title="Cooking Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Related Recipes</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {recipe.relatedRecipes.map((relatedRecipe, index) => (
                  <li key={index}>{relatedRecipe}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
