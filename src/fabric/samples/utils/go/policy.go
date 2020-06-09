package m

import (
	"crypto/sha256"
	"encoding/json"
	"fmt"
)

// Define the Policy structure
type Policy struct {
	AS AS
	AO AO
	AP int //1 is allow , 0 is deney
	AE AE
}

type AS struct {
	SGWId string `json:"sgwId"`
	SGWIpadd  string `json:"sgwIpadd"`
	ActuatorId   string `json:"actuatorId"`
	ActuatorGroup  string `json:"actuatorGr"`
	ActuatorIpadd  string `json:"actIpadd"`
}

type AO struct {
	RFID string `json:"rfid"`
}

type AE struct {
	CreatedTime int64  `json:"createdTime"`
	EndTime     int64  `json:"endTime"`
}

func (p *Policy) ToBytes() []byte {
	b, err := json.Marshal(*p)
	if err != nil {
		return nil
	}
	return b
}

func (p *Policy) GetID() string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(p.AS.SGWId+p.AS.ActuatorId+p.AO.RFID)))
}
