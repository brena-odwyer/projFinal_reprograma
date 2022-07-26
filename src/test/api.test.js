const request = require("supertest");
const app = require("../app");
const { connect } = require("../database/mongoConfig");
const User = require("../models/user");
const jwt = require("jsonwebtoken");



describe("Users router test", () => {
//    let token
//     beforeAll(async ()=>{
//         jest.setTimeout(60000)
//         await connect()
//        token = jwt.sign({}, process.env.SECRET)
//    })
    let userId;
    let token;
    // // test ("POST/user/register", (done) => {
    // //     request(app)
    // //     .post("/users/register")
    // //     .expect("Content-Type", /json/)
    // //     .send({
    // //         email: "brena@mail.com",
    // //         password: "1234"
    // //     })
    // //     .expect(200)
    // //     .end((err, res) => {
    // //         if (err) return done(err);
    // //         return done();
    // //     })

    // // });
    test("POST /user/login", (done) => {
        request(app)
        .post("/users/login")
        .expect("Content-Type", /json/)
        .send({
            email: "brena@mail.com",
            password: "1234"
        })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            token = res.body.token
            userId = res.body._id
            return done();
        })
    });


    test("PUT /user/update/:id", async (done) => {
        request(app)
        .put(`/users/update/${userId}`)
        .expect("Content-Type", /json/)
        .set("Authorization", `Baerer ${token}`)
        .send ({
            email: "brena1@mail.com",
            password: "1234"
        })
        .expect(200)
        .expect((res) => {
            expect(res.body.savedUser._id).toBe(userId);
            expect(res.body.savedUser.email).toBe("brena1@mail.com");
        })
        .end((err, res) => {
            if(err) return done(err); 
            return done();
        });
        // const user = new User({
        //     email: Math.random().toString(16) + "@mail.com",
        //     password: "1234"
        // })
        await user.save()

        console.log(token)

        const response = await request(app)
        .put(`/users/update/${user._id.toString()}`)
        .set("Authorization", `Baerer ${token}`)
        .send ({
                email: user.email,
                password: "3344"
            })
        console.log(response)
        expect(response.status).toBe(200);
        return done()
    });

    test("DELETE /user/delete/:id", (done) =>{
        request(app)
            .delete(`/users/detelete/${userId}`)
            .set("Authorization", `Baerer ${token}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                console.log(res.body)
                expect(res.body.user.email).toBe("brena@mail.com")
            })
            .end((err, res) => {
                if(err) return done(err)
                return done();
            });

    });

    
})