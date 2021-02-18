To conclude the chapter, we’ll look at a problem that calls for regular expres-
sions. Imagine we are writing a program to automatically collect information
about our enemies from the Internet. (We will not actually write that program
here, just the part that reads the configuration file. Sorry.) The configuration
file looks like this:

Warning: Content from Eloquent JavaScriptBook p(160)

function parseINI(string){
  //Start with an object to hold the top-level fields
  let result = {};
  let section = resul;
  string.split(/\r?\n/).forEach(line=>{
    let match;
    if(match == line.match(/^(\w+)=(.*)$/)){
      section[match[1]] = match[2];
    }else if(match = line.match(/^\[(.*)\]$/)){
      section = result[match[1]] = {};
    }else if( !/^\s*(;.*)?$/.test(line)){
      throw new Error("Line '"+line+"'is not valid .")
    }
  })

  return result;
}


//challenging create a Ris parser

var ris = `PMID- 22510618
OWN - NLM
STAT- MEDLINE
DCOM- 20120925
LR  - 20120418
IS  - 1532-5520 (Electronic)
IS  - 0009-9201 (Linking)
VI  - 55
IP  - 2
DP  - 2012 Jun
TI  - Ectopic pregnancy: History, incidence, epidemiology, and risk factors.
PG  - 376-86
LID - 10.1097/GRF.0b013e3182516d7b [doi]
AB  - Ectopic pregnancy is directly related to tubal infection, and so prevention of
      chlamydia and gonorrhea must be the watchword to lower its risk and incidence. With
      accurate determination of very low human chorionic gonadotropin concentrations and
      sonography, >85% of women are diagnosed before tubal rupture, which has led to
      medical therapy and laparoscopic surgery with tubal preservation and the potential
      for future fertility. Today, early intervention saves lives and reduces morbidity,
      but ectopic pregnancy still accounts for 4% to 10% of pregnancy-related deaths and
      leads to a high incidence of ectopic site gestations in subsequent pregnancies.
FAU - Marion, Laura L
AU  - Marion LL
AD  - Department of Obstetrics and Gynecology, University of Mississippi School of
      Medicine, Jackson, Mississippi 39216, USA.
FAU - Meeks, George Rodney
AU  - Meeks GR
LA  - eng
PT  - Historical Article
PT  - Journal Article
PT  - Review
PL  - United States
TA  - Clin Obstet Gynecol
JT  - Clinical obstetrics and gynecology
JID - 0070014
RN  - 0 (Chorionic Gonadotropin)
SB  - IM
MH  - Chorionic Gonadotropin/blood
MH  - Early Diagnosis
MH  - Female
MH  - History, 16th Century
MH  - History, 17th Century
MH  - History, 18th Century
MH  - History, 19th Century
MH  - History, 20th Century
MH  - History, Ancient
MH  - Humans
MH  - Incidence
MH  - Pregnancy
MH  - Pregnancy, Ectopic/*diagnosis/epidemiology/history/*therapy
MH  - Risk Factors
MH  - Rupture, Spontaneous/prevention & control
EDAT- 2012/04/19 06:00
MHDA- 2012/09/26 06:00
CRDT- 2012/04/19 06:00
PHST- 2012/04/19 06:00 [entrez]
PHST- 2012/04/19 06:00 [pubmed]
PHST- 2012/09/26 06:00 [medline]
AID - 00003081-201206000-00003 [pii]
AID - 10.1097/GRF.0b013e3182516d7b [doi]
PST - ppublish
SO  - Clin Obstet Gynecol. 2012 Jun;55(2):376-86. doi: 10.1097/GRF.0b013e3182516d7b.
`;
ris.split(/\r?\n/).forEach( line  =>{
    console.log(line.match(/^(\w+\s+?)-\s+?(.*|[^])/));
        })
ris.split(/\r?\n/).forEach( line  =>{
    console.log(line.match(/^(\w+\s*?)-\s+?(.*|[^])/));
        })

        var none   = `
        AB  - Ectopic pregnancy is directly related to tubal infection, and so prevention of
              chlamydia and gonorrhea must be the watchword to lower its risk and incidence. With
              accurate determination of very low human chorionic gonadotropin concentrations and
              sonography, >85% of women are diagnosed before tubal rupture, which has led to
              medical therapy and laparoscopic surgery with tubal preservation and the potential
              for future fertility. Today, early intervention saves lives and reduces morbidity,
              but ectopic pregnancy still accounts for 4% to 10% of pregnancy-related deaths and
              leads to a high incidence of ectopic site gestations in subsequent pregnancies.`
        function addJson(){
    var main  = none.match(/(\w+)\s*?-\s+?(.*)/),prop=main[1],value = main.input.replace(/(\w+\s+)-/,'');
    json = {prop,value}
    console.log(prop,value,main);
}
