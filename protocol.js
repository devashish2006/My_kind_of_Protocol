// protocol.js
module.exports = {
    encode: (headerObj, payloadObj) => {
      const header = JSON.stringify(headerObj);
      const payload = JSON.stringify(payloadObj);
      return Buffer.from(`${header}|${payload}`);
    },
  
    decode: (dataBuffer) => {
      const dataStr = dataBuffer.toString();
      const [headerStr, payloadStr] = dataStr.split('|');
      return {
        header: JSON.parse(headerStr),
        payload: JSON.parse(payloadStr)
      };
    }
  };
  