package m

import (
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"time"
)

type ABACRequest struct {
	AS AS
	AO AO
}

func (r *ABACRequest) ToBytes() []byte {
	b, err := json.Marshal(*r)
	if err != nil {
		return nil
	}
	return b
}

type Attrs struct {
	RFID  string
	SGWId    string
	ActuatorId    string
	Timestamp int64
}

func (a Attrs) GetId() string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(a.SGWId+a.ActuatorId+a.RFID)))
}

func (r ABACRequest) GetAttrs() Attrs {
	return Attrs{RFID: r.AO.RFID, SGWId: r.AS.SGWId, ActuatorId: r.AS.ActuatorId, Timestamp: time.Now().Unix()}
}
