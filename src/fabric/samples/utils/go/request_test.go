package m

import (
	"fmt"
	"testing"
)

func Test_ABACRequest(t *testing.T) {
	r := ABACRequest{
		AS{"0xef63cbc685ae", "*.*.*.*", "0x572f35234d05", "g1", "*.*.*.*"},
		AO{"0xef63cbc685ae072f35234d05"},
	}
	fmt.Printf("%s\n", r.ToBytes())
}
