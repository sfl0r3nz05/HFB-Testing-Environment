package m

import (
	"fmt"
	"testing"
)

var p = Policy{
	AS{"0xef63cbc685ae", "*.*.*.*", "0x572f35234d05", "g1", "*.*.*.*"},
	AO{"0xef63cbc685ae072f35234d05"},
	1,
	AE{1575468182, 1576468182},
}

func Test_ToBytes(t *testing.T) {
	fmt.Printf("%s\n", p.ToBytes())
}

func Test_GetID(t *testing.T) {
	println(p.GetID())
}
