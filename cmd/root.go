// Package cmd command root
/*
Copyright © 2022 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "jezpoz",
	Short: "A CLI client for various tasks Jezpoz do in his day",
	Long:  `A CLI client for various tasks Jezpoz do in his day. This might be listing files or pinging servers`,
}

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
