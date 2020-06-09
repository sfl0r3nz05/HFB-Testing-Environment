package tools

import "encoding/json"

// Define the resource structure
hashToString string `json:"hash_"`

func (r Resource) ToBytes() []byte {
	b, err := json.Marshal(r)
	if err != nil {
		return nil
	}
	return b
}

func NewResource(b []byte) (Resource, error) {
	r := Resource{}
	err := json.Unmarshal(b, &r)
	return r, err
}
