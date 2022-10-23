// Package cmd command
/*
Copyright © 2022 Jesper Førisdahl (jezpoz) <jesfor94@gmail.com>
*/
package cmd

import (
	"fmt"
	"os"

	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/spf13/cobra"
)

type (
	errMsg error
)

type model struct {
	textInput textinput.Model
	err       error
}

func initialModel() model {
	ti := textinput.New()
	ti.Placeholder = "Jonathan"
	ti.Focus()

	return model{
		textInput: ti,
		err:       nil,
	}
}

func (m model) Init() tea.Cmd {
	return textinput.Blink
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmd tea.Cmd

	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.Type {
		case tea.KeyEnter, tea.KeyCtrlC, tea.KeyEsc:
			return m, tea.Quit
		}
	case errMsg:
		m.err = msg
		return m, nil
	}

	m.textInput, cmd = m.textInput.Update(msg)
	return m, cmd
}

func (m model) View() string {
	return fmt.Sprintf(
		"What's your name?\n\n%s\n\n%s",
		m.textInput.View(),
		"(esc to quit)",
	)
}

// helloWorldCmd represents the helloWorld command
var helloCmd = &cobra.Command{
	Use:   "hello",
	Short: "Say hello",
	Long:  "Say hello",
	Run: func(cmd *cobra.Command, args []string) {
		m := initialModel()
		p := tea.NewProgram(m)
		if err := p.Start(); err != nil {
			fmt.Errorf("error running Hello command %s\n", err)
			os.Exit(1)
		}
	},
}

func init() {
	rootCmd.AddCommand(helloCmd)
}
