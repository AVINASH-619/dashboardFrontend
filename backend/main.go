package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type Item struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

var items Item

func getItemsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Print("This is hello from console")
	items.ID="1"
	items.Name="Avinash"
	json.NewEncoder(w).Encode(items)
}

func main() {
	r := mux.NewRouter()

	// Define API routes
	r.HandleFunc("/", getItemsHandler).Methods("GET")

	// Define CORS configuration
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"}, // Allow only this origin
		AllowedMethods:   []string{"GET", "OPTIONS"},
		AllowCredentials: true,
		AllowedHeaders:   []string{"*"},
	})
	
	// Use cors middleware with custom configuration
	handler := c.Handler(r)

	// Start the server
	fmt.Print("Starting the server")
	http.Handle("/", handler)
	http.ListenAndServe(":8000", nil)
}
