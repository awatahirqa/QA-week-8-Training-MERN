'use strict'
const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { response, request } = require("../app");
chai.use(chaiHttp);//associae the module with chai
describe('A simple test', () => {
    //does 1+1=2

    it('should return 2 when 1+1', () => {
        const expression = 1 + 1;
        expect(expression).to.equal(2);

    })
    it("Another one", () => {
        const val = null;
        expect(val).to.be.null;
    })

});

describe('User Routes', () => {
    it('Test /hello route'), (done) => {
        //check if the call is succesfull
        //app is equal to local host 5019
        chai.request(app)

            .get("/hello")
            .end((err, response) => {
                if (err) {
                    console.log('Something went wrong');
                    done(err);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                done();
            });
    }
it('Test /getAll route',(done)=>{
    //request is to http 55019/getAll
    chai.request(app)
    .get("/product/getAll")
    .end((err,res)=>{
        if(err)done(err);
        expect(res).to.haveOwnProperty.status(200);
        expect(res.body).to.not.nested.null;
        console.log(res.body);
        res.body.map((item)=>expect(item).to.contain.key("_id"));
        res.body.map((item)=>expect(item).to.be.a('object'));
        res.body.map((item)=> expect(item._id).to.be.a('String'));

        done();
    })
});
it('Test /create route',(done)=>{
    //request is to localhost 5091/create
    thai.request(app)
    .post("/product/create")
    .send({'name':'Captn America'})
    .end((err,responce)=>{
        if(err)done(err)
            expect(err).to.be.null;
            expect(rsponce).to.not.be.undefined;
            expect(responce).to.have.status(201);
            expect(rsponce).to.be.a('string');
            expect(response).to.have.property('text','captn America has been added')

        
    })
})



});
