import './SWAPIinterface.css';

export function Card() {
    return (
        <div className="card">
            <div className="card-header">
                Example Info
            </div>
            <div className="card-body">
                <pre>
                    {`{
  "name": "John Doe",
  "age": "30",
  "occupation": "Engineer",
  "hobbies": ["reading", "cycling", "gaming"],
  "favorite_food": "pizza",
  "location": "New York, USA",
  "friends": [
    "https://example.com/friend1",
    "https://example.com/friend2",
    "https://example.com/friend3"
  ],
  "profile_url": "https://example.com/johndoe"
}`}
                </pre>
            </div>
        </div>
    );
}