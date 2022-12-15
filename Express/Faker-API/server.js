const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFake = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber : faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newFake;
};

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});
app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});
app.get("/api/user/company", (req, res) => {
    res.json( {
        user: newFakeUser,
        company: newFakeCompany,
    } );
});

const newFakeUser = createUser();
console.log(newFakeUser);

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.listen( port, () => console.log(`Listening on port: ${port}`) );