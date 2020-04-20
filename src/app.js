console.log('app.js is running');


var app = {
    title: 'Some Title',
    subtitle: 'this my subtitle',
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: "Mahmud",
    age: "18",
    location: "Jateng"
}

function getLocation(location) {
    if (location) {
        return <p>location: {location}</p>;
    } else {
        return undefined;
    }
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <h2>Age: {user.age}</h2>
        {getLocation(user.location)}
    </div>);


var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);