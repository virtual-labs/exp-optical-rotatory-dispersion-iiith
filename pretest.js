 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Molecular weight of a R enantiomer is __________ than that of S enantiomer. ", ///// Write the question inside double quotes
            answers: {
                a: "Higher", ///// Write the option 1 inside double quotes
                b: "Equal", ///// Write the option 2 inside double quotes
		c: "Lower", ///// Write the option 1 inside double quotes
                b: "can not say", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. In normal ORD spectra there are ___ maxima and __ minima.",  ///// Write the question inside double quotes
      answers: {
        a: "1,2", ///// Write the option 1 inside double quotes
        b: "1,1", ///// Write the option 2 inside double quotes
        c: "0,0",
	d: "0,1""
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
      question: "3. Octant rule determines __________ of Cotton effect in ketones. ",  ///// Write the question inside double quotes
      answers: {
        a: "magnitude", ///// Write the option 1 inside double quotes
        b: "sign", ///// Write the option 2 inside double quotes
        c: "probability",
	d: "frequency"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
      question: "4. Abnormal ORD is observed when _________ is present in a chiral environment. ",  ///// Write the question inside double quotes
      answers: {
        a: "chromophore", ///// Write the option 1 inside double quotes
        b: "asymmetry center", ///// Write the option 2 inside double quotes
        c: "chiral center",
	d: "none of the above"
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


    {
      question: "5. At the absorption peak an anomalous ORD curve _____________.",  ///// Write the question inside double quotes
      answers: {
        a: "reaches minimum", ///// Write the option 1 inside double quotes
        b: "crosses the base line", ///// Write the option 2 inside double quotes
        c: "reaches maximum",
	d: "none of the above"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

			  

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
