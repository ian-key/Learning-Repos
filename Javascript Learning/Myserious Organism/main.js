// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      let similarDNA = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrg.dna[i]) {
          similarDNA++;
        }
      }
      return console.log('Specimen ' + this.specimenNum + ' and Specimen ' + otherOrg.specimenNum + ' have ' + (Math.floor((similarDNA / this.dna.length) * 100)) + '% DNA in common.') ;
    },
    willLikelySurvive() {
      let survivalDNA = 0;
      for (let d = 0; d < this.dna.length; d++) {
        if (this.dna[d] === 'C' || this.dna[d] === 'G') {
          survivalDNA++;
        } 
      } return survivalDNA / this.dna.length >= 0.6;
    }
    }
  };

// Tests

// Req 1 Test
// const pAequor = pAequorFactory(1, mockUpStrand());
// console.log(pAequor)

// Req 2 Test
// const pAequor = pAequorFactory(1, mockUpStrand());
// console.log(pAequor)
// pAequor.mutate();
// console.log(pAequor)

// Req 3 Test
// const pAequor1 = pAequorFactory(1, mockUpStrand());
// const pAequor2 = pAequorFactory(2, mockUpStrand());
// pAequor1.compareDNA(pAequor2);

// Req 4 Test
// const pAequor = pAequorFactory(1, mockUpStrand());
// pAequor.willLikelySurvive();

// Req 5 Test
const survivors = [];
let counter = 1;

while (survivors.length < 30) {
  let organism = pAequorFactory(counter, mockUpStrand());
  if (organism.willLikelySurvive()) {
    survivors.push(organism);
  }
  counter++;
}

console.log(survivors)
