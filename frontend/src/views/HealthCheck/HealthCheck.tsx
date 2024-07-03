import "./HealthCheck.css";
import { getTest } from "../../api/test";
import { useState } from "react";
export default function HealthCheck() {
  const [pickedUrl, setPickedUrl] = useState("");

  async function handleSendRequest() {
    event?.preventDefault();
    const test = await getTest(pickedUrl);
    console.log(test);
  }

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickedUrl(e.currentTarget.value);
  };

  const URLS = [
    "https://api.chatter.se",
    "https://apii.chatter.se",
    "http://api.chatter.se",
    "https://chatter-env.eba-gxgabbz2.eu-north-1.elasticbeanstalk.com",
    "http://chatter-env.eba-gxgabbz2.eu-north-1.elasticbeanstalk.com",
  ];

  return (
    <main className="main">
      <h1 className="heading">Health check and debugging</h1>
      <form className="form" onSubmit={() => handleSendRequest()}>
        {URLS.map((url) => {
          return (
            <label className="text label">
              <input
                type="radio"
                value={url}
                name="url"
                checked={url === pickedUrl}
                onChange={(e) => onRadioChange(e)}
              />
              {url}
            </label>
          );
        })}

        <button>SEND</button>
      </form>
    </main>
  );
}
