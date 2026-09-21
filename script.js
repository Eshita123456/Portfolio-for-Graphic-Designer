/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking link */

document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });



/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [

    /* ================================================
       PROJECT 1
    ================================================= */

    {
        id: 1,

        title: "Glocious Infotech",

        category: "Brand Promotion",

        type: "Social Media Design",

        description:
            "A collection of promotional social media creatives developed for Glocious Infotech Pvt. Ltd. to communicate technology, communication and marketing solutions.",

        role:
            "Graphic Design & Social Media Marketing",

        tools:
            "Photoshop · Illustrator · Canva",

        images: [

            "./images/G1.jpeg",

            "./images/G2.jpeg",

            "./images/G3.jpeg",

            "./images/G4.jpeg",

            "./images/G5.jpeg",

            "./images/G6.jpeg",

        ]

    },


    /* ================================================
       PROJECT 2
    ================================================= */

    {
        id: 2,

        title: "Real Estate Campaigns",

        category: "Real Estate",

        type: "Marketing Creatives",

        description:
            "A collection of property marketing and real estate promotional creatives designed for digital campaigns.",

        role:
            "Graphic Design & Campaign Creative",

        tools:
            "Photoshop · Canva · Illustrator",

        images: [

            "./images/p1.jpeg",

            "./images/p2.jpeg",

            "./images/p3.jpeg",

            "./images/p4.jpeg",

            "./images/p5.jpeg",

            "./images/p6.jpeg",

            "./images/p7.jpeg",

            "./images/p8.jpeg",

            "./images/p9.jpeg",

            "./images/p10.jpeg",

            "./images/p11.jpeg",

            "./images/p12.jpeg"

        ]

    },


    /* ================================================
       PROJECT 3
    ================================================= */

    {
        id: 3,

        title: "Social Media Creatives",

        category: "Social Media",

        type: "Content Design",

        description:
            "Creative social media content designed for Instagram, Facebook and other digital platforms.",

        role:
            "Graphic Design & Content Creation",

        tools:
            "Photoshop · Canva · Illustrator",

        images: [

            "./images/h1.jpeg",

            "./images/h2.jpeg",

            "./images/h3.jpeg",

            "./images/h5.jpeg",

            "./images/h6.jpeg",

            "./images/h7.jpeg",

            "./images/h8.jpeg"

        ]

    },


    /* ================================================
       PROJECT 4
    ================================================= */

    {
        id: 4,

        title: "Brand Identity",

        category: "Branding",

        type: "Visual Identity",

        description:
            "Visual identity and branding projects focused on creating consistent and memorable brand communication.",

        role:
            "Graphic Design & Visual Communication",

        tools:
            "Illustrator · Photoshop · Figma",

        images: [

            "./images/c1.jpeg",

            "./images/c2.jpeg",

            "./images/c3.jpeg",

            "./images/c4.jpeg",

            "./images/c5.jpeg",

            "./images/c6.jpeg",

            "./images/c7.jpeg",

            "./images/c8.jpeg",

            "./images/c10.jpeg"

        ]

    },


    /* ================================================
       PROJECT 5
    ================================================= */

    {
        id: 5,

        title: "Digital Marketing Campaigns",

        category: "Digital Marketing",

        type: "Campaign Design",

        description:
            "Promotional and digital marketing creatives designed to communicate business offerings and campaign messages.",

        role:
            "Creative Design & Digital Marketing",

        tools:
            "Photoshop · Canva · Meta",

        images: [

            "./images/d1.jpeg",

            "./images/d2.jpeg",

            "./images/d3.jpeg",

            "./images/d4.jpeg",

            "./images/d5.jpeg"

        ]

    }

];



/* =====================================================
   PORTFOLIO ELEMENTS
===================================================== */

const portfolioGrid =
    document.getElementById("portfolioGrid");


const filterButtons =
    document.querySelectorAll(".filter-btn");


const projectModal =
    document.getElementById("projectModal");


const modalContent =
    document.getElementById("modalContent");


const modalClose =
    document.getElementById("modalClose");



/* =====================================================
   DISPLAY PROJECTS
===================================================== */

function displayProjects(category = "all") {


    portfolioGrid.innerHTML = "";


    let filteredProjects;


    if (category === "all") {

        filteredProjects = projects;

    } else {

        filteredProjects =
            projects.filter(
                project =>
                    project.category === category
            );

    }


    filteredProjects.forEach((project, index) => {


        const card =
            document.createElement("article");


        card.className =
            "portfolio-card reveal";


        /*
            First project is larger
        */

        if (index === 0 && category === "all") {

            card.classList.add("featured-card");

        }


        card.innerHTML = `

            <div class="portfolio-image">

                <img
                    src="${project.images[0]}"
                    alt="${project.title}"
                    loading="lazy"
                >


                <div class="portfolio-overlay">

                    <span>
                        ${String(project.id).padStart(2, "0")}
                        /
                        ${project.category}
                    </span>


                    <h3>
                        ${project.title}
                    </h3>


                    <a
                        href="#"
                        class="project-link"
                        data-project="${project.id}"
                    >

                        View Case Study
                        →

                    </a>

                </div>

            </div>


            <div class="portfolio-card-info">

                <span>
                    ${project.type}
                </span>


                <h3>
                    ${project.title}
                </h3>

            </div>

        `;


        portfolioGrid.appendChild(card);


    });


    /*
        Attach project click events
    */

    document
        .querySelectorAll(".project-link")
        .forEach(link => {


            link.addEventListener("click", event => {

                event.preventDefault();


                const projectId =
                    Number(
                        link.dataset.project
                    );


                openProject(projectId);

            });

        });


    /*
        Re-run scroll observer
    */

    observeRevealElements();

}



/* =====================================================
   FILTER
===================================================== */

filterButtons.forEach(button => {


    button.addEventListener("click", () => {


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const category =
            button.dataset.filter;


        displayProjects(category);

    });

});



/* =====================================================
   OPEN PROJECT
===================================================== */

function openProject(projectId) {


    const project =
        projects.find(
            item => item.id === projectId
        );


    if (!project) return;



    modalContent.innerHTML = `

        <div class="modal-header">

            <div class="modal-category">

                ${project.category}
                ·
                ${project.type}

            </div>


            <h2>
                ${project.title}
            </h2>


            <p>
                ${project.description}
            </p>

        </div>


        <div class="modal-meta">


            <div>

                <small>
                    MY ROLE
                </small>

                <strong>
                    ${project.role}
                </strong>

            </div>


            <div>

                <small>
                    CATEGORY
                </small>

                <strong>
                    ${project.category}
                </strong>

            </div>


            <div>

                <small>
                    TOOLS
                </small>

                <strong>
                    ${project.tools}
                </strong>

            </div>


        </div>


        <div class="modal-images">

            ${project.images
            .map(
                image => `

                        <img
                            src="${image}"
                            alt="${project.title}"
                            loading="lazy"
                        >

                    `
            )
            .join("")
        }

        </div>

    `;


    projectModal.classList.add("active");

    document.body.classList.add("modal-open");


}



/* =====================================================
   CLOSE PROJECT
===================================================== */

function closeProject() {

    projectModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


modalClose.addEventListener(
    "click",
    closeProject
);



/* Click outside modal */

projectModal.addEventListener(
    "click",
    event => {

        if (
            event.target === projectModal
        ) {

            closeProject();

        }

    }
);



/* ESC key */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

let revealObserver;


function observeRevealElements() {


    const elements =
        document.querySelectorAll(".reveal");


    if (
        "IntersectionObserver"
        in window
    ) {


        if (!revealObserver) {


            revealObserver =
                new IntersectionObserver(
                    entries => {


                        entries.forEach(
                            entry => {


                                if (
                                    entry.isIntersecting
                                ) {


                                    entry.target
                                        .classList
                                        .add("visible");


                                    revealObserver
                                        .unobserve(
                                            entry.target
                                        );

                                }

                            }
                        );

                    },

                    {
                        threshold: 0.12
                    }

                );

        }


        elements.forEach(element => {

            revealObserver.observe(element);

        });


    } else {


        elements.forEach(element => {

            element.classList.add("visible");

        });

    }

}



/* =====================================================
   INITIAL PROJECT LOAD
===================================================== */

displayProjects();



/* =====================================================
   CONTACT FORM - EMAILJS
===================================================== */

/*
    IMPORTANT:

    EmailJS library must be loaded in index.html
    BEFORE this script.

    Add this before script.js:

    <script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
    </script>

*/


/* =====================================================
   EMAILJS INITIALIZATION
===================================================== */

// Replace YOUR_PUBLIC_KEY with your EmailJS Public Key.

emailjs.init({
    publicKey: "DzqPi6kKYjZzrn4Ey"
});



/* =====================================================
   CONTACT FORM ELEMENTS
===================================================== */

const contactForm =
    document.getElementById("contactForm");


const sendButton =
    contactForm
        ? contactForm.querySelector(".submit-button")
        : null;


const formStatus =
    document.getElementById("formStatus");



/* =====================================================
   CONTACT FORM SUBMISSION
===================================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {


            /*
                Stop normal HTML form submission.

                We are NOT using:

                action="contact.php"

                EmailJS will handle the form.
            */

            event.preventDefault();


            // Safety check

            if (!sendButton) return;



            /* -----------------------------------------
               LOADING STATE
            ----------------------------------------- */

            sendButton.disabled = true;


            sendButton.innerHTML = `

                Sending...

                <i class="fa-solid fa-spinner fa-spin"></i>

            `;



            /* -----------------------------------------
               CLEAR OLD STATUS
            ----------------------------------------- */

            if (formStatus) {

                formStatus.textContent = "";

                formStatus.className =
                    "form-status";

            }



            /* -----------------------------------------
               SEND EMAIL USING EMAILJS
            ----------------------------------------- */

            emailjs.sendForm(

                "service_78gd3wn",
                "template_eiglvhf",
                contactForm

            )


                /* -----------------------------------------
                   SUCCESS
                ----------------------------------------- */

                .then(response => {


                    console.log(
                        "Email sent successfully:",
                        response.status,
                        response.text
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Message sent successfully! I'll get back to you soon.";

                        formStatus.classList.add(
                            "success"
                        );

                    }


                    // Clear form

                    contactForm.reset();



                    // Restore button

                    sendButton.disabled = false;


                    sendButton.innerHTML = `

                    Send Message

                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                `;

                })


                /* -----------------------------------------
                   ERROR
                ----------------------------------------- */

                .catch(error => {


                    console.error(
                        "EmailJS Error:",
                        error
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Something went wrong. Please try again.";

                        formStatus.classList.add(
                            "error"
                        );

                    }


                    // Restore button

                    sendButton.disabled = false;


                    sendButton.innerHTML = `

                    Send Message

                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                `;

                });

        }
    );

}