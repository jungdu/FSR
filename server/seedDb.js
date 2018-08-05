const Site = require('./models/site');

const seedData = require('./seedData');

class SeedDb{
    constructor(){
        
    }

    async cleanDb(){
        await Site.remove({});
    }

    pushDataToDb(){
        const fontSites = seedData.fontSites;
        fontSites.forEach((site) => {
            site.siteKind = "font";
            const newSite = new Site(site);
            newSite.save();
        });
        const imgSites = seedData.imgSites;
        imgSites.forEach((site) => {
            site.siteKind = "img";
            const newSite = new Site(site);
            newSite.save();
        });
        const soundSites = seedData.soundSites;
        soundSites.forEach((site)=>{
            site.siteKind = "sound";
            const newSite = new Site(site);
            newSite.save();
        })
    }

    async seed(){
        await this.cleanDb();
        this.pushDataToDb();
    }
}

module.exports = SeedDb;