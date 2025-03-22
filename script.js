// ✅ Function to navigate from index.html to sections.html
function navigateToSections(documentId) {
    window.location.href = `./sections.html?document=${documentId}`;
}

// ✅ Function to get document ID from URL
function getDocumentId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("document");
}

// ✅ Function to get section ID from URL
function getSectionId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("section");
}

// ✅ Function to display sections in sections.html
function loadSections() {
    const documentId = getDocumentId();
    const sectionsList = document.getElementById("sections-list");
    const sectionTitle = document.getElementById("section-title");

    if (!documentId) {
        sectionTitle.innerText = "Error: No document selected!";
        return;
    }

    if (documentId !== "1") {
        sectionTitle.innerText = "Error: Document not available!";
        return;
    }
    const totalSections = 7;    
    sectionTitle.innerText = `Sections for Document ${documentId}`;

    for (let i = 1; i <= totalSections; i++) {
        const sectionButton = document.createElement("button");
        sectionButton.innerText = `📖 Section ${i}`;
        sectionButton.onclick = () => startSection(documentId, i);
        sectionsList.appendChild(sectionButton);
    }
}

// ✅ Function to start a section (Navigate to questions.html)
function startSection(documentId, sectionId) {
    window.location.href = `./questions.html?document=${documentId}&section=${sectionId}`;
}

// ✅ Function to go back to homepage
function goBackToStart() {
    window.location.href = "index.html";
}

// ✅ Function to go back to sections
function goBackToSections() {
    const documentId = getDocumentId();
    window.location.href = `sections.html?document=${documentId}`;
}

// ✅ Sample Questions Data (Replace with actual questions)
const questionData = {
    "1": {  // Document 1
        "1": [  // Section 1
            {
                question: "Which of the following would not be considered to be a secondary lymphoid organ?",
                options: ["Lymph nodes", "Spleen", "Thymus", "Tonsils"],
                correctAnswers: [2]
            },
            {
                question: "Antigen presenting cells (APCs) include macrophages and dendritic cells, which are found in lymphoid tissues and the __________.",
                options: ["Heart", "Kidney", "Skin"],
                correctAnswers: [2]
            },
            {
                question: "Which types of immunoglobulins do not exist?",
                options: ["IgA", "IgB", "IgC", "IgD"],
                correctAnswers: [1, 2]
            },
            {
                question: "Decreased serum levels of the C3 and C4 fractions of the complement pathway may be due to:",
                options: [
                    "Activation of the classical complement pathway", 
                    "Activation of the alternative complement pathway", 
                    "Activation of the mannose complement pathway", 
                    "Decreased synthesis"
                ],
                correctAnswers: [0, 2, 3]
            },
            {
                question: "Which statements are CORRECT?",
                options: [
                    "IL-2 is synthesized by T lymphocytes", 
                    "IL-2 is synthesized by B lymphocytes", 
                    "IL-2 stimulates T and B cell proliferation and differentiation, and NK cell activity", 
                    "IL-2 has antiviral activity"
                ],
                correctAnswers: [0]
            },
            {
                question: "The expression of HLA molecules is induced by:",
                options: ["IL-5", "IL-2", "IFN-γ"],
                correctAnswers: [2]
            },
            {
                question: "T lymphocytes undergo the process of negative selection in which of the following lymphoid organs?",
                options: ["Bone marrow", "Thymus", "Lymph nodes", "Spleen"],
                correctAnswers: [1]
            },
            {
                question: "Which of the following types of antigen presenting cells (APCs) is specialized for degradation and presentation of particular antigens to T cells?",
                options: ["Mast cells", "Dendritic cells", "NK cells", "Neutrophils"],
                correctAnswers: [1]
            },
            {
                question: "Match the immunoglobulin with the functional description: Can transfer across the placental (maternal protection).",
                options: ["IgE", "IgM", "IgG & IgM", "IgG & IgA", "IgG"],
                correctAnswers: [4]
            },
            {
                question: "In the case of a complete genetic deficiency of C2:",
                options: [
                    "The haemolytic activity of total complement is reduced",
                    "The fixation of C1q to the antigen-antibody complexes is significantly impaired",
                    "The classical C3-convertase is normal",
                    "The main clinical manifestation is angioneurotic oedema",
                    "There may be a lupus syndrome"
                ],
                correctAnswers: [0, 4]
            },
            {
                question: "Which statements are CORRECT?",
                options: [
                    "TNF-a is synthesized by macrophages",
                    "TNF-a stimulates the myelopoiesis",
                    "TNF-a induces cytotoxicity, tumour necrosis, vascular thrombosis"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "The T cell antigen recognition receptor makes contact with:",
                options: [
                    "The peptide bound by the HLA molecule",
                    "Areas from the antigen-binding pocket of the HLA molecule",
                    "b2 microglobulin"
                ],
                correctAnswers: [0]
            },
            {
                question: "Major innate mechanism that mediates destruction by lysis of foreign substances in the body:",
                options: [
                    "Regulatory T cells",
                    "Helper T cells",
                    "Complement",
                    "Interferon",
                    "Macrophage and other APCs"
                ],
                correctAnswers: [2, 4]
            },
            {
                question: "Which cell is able to provide two signals for activation of T cells?",
                options: [
                    "Regulatory T cells",
                    "Helper T cells",
                    "Complement",
                    "Interferon",
                    "Dendritic cells"
                ],
                correctAnswers: [4]
            },
            {
                question: "The Heidelberger curve represents:",
                options: [
                    "The amount of antibodies",
                    "The quality of antigens",
                    "Basic patterns of binding of antigens and antibodies"
                ],
                correctAnswers: [2]
            },
            {
                question: "The diagnostic criteria for primary antiphospholipid syndrome include:",
                options: [
                    "Vascular thrombosis, complicated pregnancy, presence of LA (lupus anticoagulant), moderate or high titre of aCL and ab2GPI in plasma",
                    "One or more miscarriages of a morphologically normal embryo before g.w. 10",
                    "Three or more unexplained consecutive spontaneous abortions before g.w. 10",
                    "Unexplained transient loss of vision – unilateral or bilateral",
                    "Presence of moderate or high titre of aCL from IgG or IgM type",
                    "Presence of moderate or high titre of ab2GPI from IgG or IgM type"
                ],
                correctAnswers: [0, 2, 4, 5]
            },
            {
                question: "The HLA compatibility between donor and recipient is determined prospectively and is selection criteria in:",
                options: [
                    "Transplantation or haematopoietic stem cells (HSCs)",
                    "Liver transplantation",
                    "Heart transplantation",
                    "Kidney transplantation"
                ],
                correctAnswers: [0, 1, 2, 3]
            },
            {
                question: "Which of the following signs indicate hereditary deficiency of antibodies?",
                options: [
                    "Without infections until 7-9 months",
                    "Severe bacterial infections (e.g. Streptococcus pneumoniae)",
                    "Recurrent infections with opportunistic microorganisms (e.g. Pneumocystis jiroveci)",
                    "Poor wound healing"
                ],
                correctAnswers: [1, 2]
            },
            {
                question: "T-B+NK+ phenotype in combined immunodeficiency is observed when there is/are:",
                options: [
                    "Defect in IL-7R (IL-7 receptor)",
                    "Defects in RAG1 and RAG2 genes",
                    "Defects in ZAP70",
                    "Omenn syndrome"
                ],
                correctAnswers: [0]
            },
            {
                question: "Which statement(s) about primary immunodeficiencies is/are true?",
                options: [
                    "Mutations that cause them arise \"de novo\" at fertilisation",
                    "They are inherited predominantly through the X-chromosome",
                    "They have autosomal dominant, autosomal recessive inheritance or through X-chromosome",
                    "These are polygenic diseases influenced by environmental factors"
                ],
                correctAnswers: [2]
            }
        ], // Close Section "1"
        
        "2": [ // Open Section "2"
            {
                question: "Indicate the correct answer(s):",
                options: [
                    "Secondary immunodeficiencies are more common than primary",
                    "Primary immunodeficiencies are more common than secondary",
                    "Secondary immunodeficiencies are observed in the treatment of neoplasms",
                    "Secondary immunodeficiencies are observed after organ and tissue transplantations"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "Which is false?",
                options: [
                    "Anergy = a lack of reaction by T cells to their antigens",
                    "People with autoimmune disorders have immune complexes in their serum",
                    "Autoimmune diseases are usually reversible",
                    "ANA are autoantibodies often found, but are not unique for autoimmune disorders"
                ],
                correctAnswers: [2]
            },
            {
                question: "Corticosteroids are used most frequently for their anti-inflammatory effect.",
                options: [
                    "True",
                    "False – they are used for their pro-inflammatory effects",
                    "False – they are used for their pain-relief effect"
                ],
                correctAnswers: [0]
            },
            {
                question: "Graft-vs-Host reaction:",
                options: [
                    "Requires MHC differences between donors and recipient",
                    "Requires immunocompetent donor cells",
                    "May be a result of infusion of blood products containing viable lymphocytes in a immunologically incompetent recipient",
                    "Requires suppressor T cells"
                ],
                correctAnswers: [0, 1, 2]
            },
            {
                question: "The main immunosuppressants used in transplantation (calcineurin antagonists – Cyclosporine, Tacrolimus) block:",
                options: [
                    "T-cells",
                    "B-cells",
                    "Monocytes",
                    "NK cells"
                ],
                correctAnswers: [0]
            },
            {
                question: "Which factors are related to potential oncogenesis?",
                options: [
                    "Chemicals",
                    "Oncogenes",
                    "Radiation",
                    "All of the above"
                ],
                correctAnswers: [3]
            },
            {
                question: "List the main methods of treatment of severe combined immunodeficiencies (SCID):",
                options: [
                    "Bone marrow transplant – preferably from HLA compatible sibling",
                    "Gene therapy",
                    "Prophylaxis – no live vaccines (BCG)"
                ],
                correctAnswers: [0, 1, 2]
            },
            {
                question: "B lymphocytes develop immunocompetence in the __________.",
                options: [
                    "Thymus",
                    "Spleen",
                    "Bone marrow",
                    "Lymph nodes"
                ],
                correctAnswers: [2]
            },
            {
                question: "Which of the following is NOT a major feature of the adaptive immune response?",
                options: [
                    "Specificity",
                    "Diversity",
                    "Memory",
                    "Speed"
                ],
                correctAnswers: [3]
            },
            {
                question: "Match the immunoglobulin with the functional description. Predominant in the primary (early) immune response:",
                options: [
                    "IgG",
                    "IgE",
                    "IgM",
                    "IgG & IgM",
                    "IgG & IgA"
                ],
                correctAnswers: [2]
            },
            {
                question: "Which statements are CORRECT?",
                options: [
                    "IL-7 is synthesised by T lymphocytes",
                    "IL-7 is synthesised by stromal cells",
                    "IL-7 stimulates the pre-B cell growth, T cell stimulation",
                    "IL-7 stimulates eosinophilic differentiation and IgA switching"
                ],
                correctAnswers: [1]
            },
            {
                question: "Which of the following statements is/are TRUE?",
                options: [
                    "HLA class I molecules are expressed on almost all nucleated cells, while class II HLA molecules are constitutively expressed on APCs.",
                    "HLA class I molecules consist of a-chain and b2m, which are coded by genes in the class I region.",
                    "HLA class II molecules consist of a- and b-chains which are encoded by genes in the class II region."
                ],
                correctAnswers: [0, 1, 2]
            },
            {
                question: "Substances capable of triggering the adaptive immune system and provoking an immune response are called antigens",
                options: [
                    "True",
                    "False",
                    "It depends on the antigen"
                ],
                correctAnswers: [0]
            },
            {
                question: "Immunophenotypisation is a method based on:",
                options: [
                    "Binding a monoclonal antibody with a corresponding antigen or a receptor expressed on a cell membrane",
                    "Binding a monoclonal antibody with a corresponding antigen or a receptor expressed on a target tissue",
                    "Binding a monoclonal antibody with a second antibody expressed on a cell membrane"
                ],
                correctAnswers: [0]
            },
            {
                question: "Which statements are CORRECT?",
                options: [
                    "The molecular-biological methods for determining HLA are based on the chain-polymerase reaction",
                    "Sequencing is used as a primary method for HLA typing with high differential ability",
                    "The PCR-SSP method is based on hybridisation of a panel of oligonucleotide probes and amplifies segment from the HLA genes"
                ],
                correctAnswers: [0, 1, 2]
            },
            {
                question: "Which of the following drugs is administered as a replacement therapy in B-cell deficiency?",
                options: [
                    "Antibiotics",
                    "C1-esterase inhibitor",
                    "Human immunoglobulin preparations",
                    "Corticosteroids"
                ],
                correctAnswers: [2]
            },
            {
                question: "Successful treatment of T cell deficiency is achieved with (indicate the correct answer(s)):",
                options: [
                    "Gene therapy",
                    "Antibiotic and antifungal therapy",
                    "Transplantation and haematopoietic stem cells",
                    "Timely vaccination according to the immunisation calendar of RB"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "Which statement(s) about the primary immunodeficiencies is/are true?",
                options: [
                    "They belong to the group of rare diseases",
                    "They have predominantly autosomal dominant inheritance pattern",
                    "They affect children more often",
                    "They affect equally children and adults"
                ],
                correctAnswers: [1, 2]
            },
            {
                question: "Major consequences of the secondary immunodeficiencies is/are:",
                options: [
                    "Accelerated aging",
                    "Infections",
                    "Development of haematologic malignancies",
                    "Inadequate response after vaccination"
                ],
                correctAnswers: [0, 1]
            },
            {
                question: "Which of the following factors have NOT been associated with the development of autoimmune disease:",
                options: [
                    "Sex",
                    "HLA",
                    "Genetic factors other than HLA",
                    "Infection",
                    "SCID"
                ],
                correctAnswers: [4]
            }            
        ], // Close Section "2"

        "3": [ // Open Section "3"
            {
                question: "Which is associated with a butterfly rash on nose and cheeks?",
                options: [
                    "Type 1 diabetes",
                    "Systemic lupus erythematosus",
                    "Pernicious anaemia",
                    "Myasthenia gravis"
                ],
                correctAnswers: [1]
            },
            {
                question: "The hyperacute rejection of the kidney graft may be due to:",
                options: [
                    "Antibodies",
                    "Antibodies against the Rhesus system",
                    "Antibodies against the HLA class I antigens",
                    "It is mediated primarily by T lymphocytes",
                    "Positive crossmatch between serum of the donor and lymphocytes of the recipient"
                ],
                correctAnswers: [2]
            },
            {
                question: "InTransplant patients with prolonged immunosuppression require monitoring of: (which is not true?)",
                options: [
                    "T- and B-cell function",
                    "Alloantibodies",
                    "Autoantibodies",
                    "Serum immunoglobulins"
                ],
                correctAnswers: [2]
            },
            {
                question: "Which of the following is/are true?",
                options: [
                    "The immune system does not react against tumour antigens because they are “self”",
                    "Tumour cells do not express specific antigens",
                    "The immune system reacts against specific tumour antigens through humoral and cell immune responses",
                    "The immune system reacts against specific tumour antigens through cell immune responses alone"
                ],
                correctAnswers: [2]
            },
            {
                question: "Which of the following apply to both primary and secondary lymphoid organs?",
                options: [
                    "Cellular proliferation",
                    "Differentiation of lymphocytes",
                    "Cellular interaction",
                    "Antigen-dependant response"
                ],
                correctAnswers: [0, 1, 2]
            },
            {
                question: "The following properties render a substance immunogenic:",
                options: [
                    "High molecular weight",
                    "Chemical complexity",
                    "Sufficient stability and persistence after injection",
                    "All of the above",
                    "All of the above are essential but not sufficient"
                ],
                correctAnswers: [4]
            },
            {
                question: "An immunoglobulin molecule contains:",
                options: [
                    "Two identical light chains",
                    "Variable and constant regions on each chain present",
                    "Two identical heavy chains",
                    "Polypeptide chains, divided into domains"
                ],
                correctAnswers: [0, 1, 2, 3]
            },
            {
                question: "The first immunoglobulin synthesised by the foetus is:",
                options: [
                    "IgA",
                    "IgE",
                    "IgG",
                    "IgM",
                    "The foetus does not synthesise immunoglobulins"
                ],
                correctAnswers: [3]
            },
            {
                question: "Complement activation by an immune complex may result in:",
                options: [
                    "Precipitation",
                    "Release of anaphylatoxins",
                    "Release of macrophage-inhibiting factor",
                    "Opsonisation"
                ],
                correctAnswers: [1, 3]
            },
            {
                question: "Helper T cells do not induce:",
                options: [
                    "Proliferation of B cells",
                    "Differentiation of B cells into plasma cells",
                    "Expansion of the pool of memory B cells",
                    "V, J joining in light chains",
                    "Immunoglobulin class switch"
                ],
                correctAnswers: [3]
            },
            {
                question: "Helper T cells do not induce:",
                options: [
                    "Proliferation of B cells",
                    "Differentiation of B cells into plasma cells",
                    "Expansion of the pool of memory B cells",
                    "V, J joining in light chains",
                    "Immunoglobulin class switch"
                ],
                correctAnswers: [3]
            },
            {
                question: "Which of the following apply uniquely to secondary lymphoid organs?",
                options: [
                    "Antigen-dependent response",
                    "Circulation of lymphocytes",
                    "Terminal differentiation",
                    "Cellular proliferation"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "Haptens:",
                options: [
                    "Require carrier molecules in order to be immunogenic",
                    "Will not react with specific antibodies in vitro unless homologous carriers are employed",
                    "Interact with specific antibody even if the hapten is monovalent",
                    "Can stimulate secondary antibody responses without carriers"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "The antigen-binding site of an Ig molecule:",
                options: [
                    "Is in the first domain of the N-terminal end of L and H chains",
                    "Is destroyed by removal of sugar residues",
                    "Has a specificity determined predominantly by variations in the hypervariable regions",
                    "Has a size that cannot be determined from studies on the binding of antigen fragments"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "The properties of human IgG are such that:",
                options: [
                    "It can pass the placenta",
                    "It can be elevated by pepsin and yet remain divalent",
                    "Its half-life is approximately 23 days",
                    "It induces the formation of leukocytes"
                ],
                correctAnswers: [0, 1, 2]
            },
            {
                question: "CD4+ cells:",
                options: [
                    "Can help B cells make antibody",
                    "Can process and present antigen",
                    "Can amplify activities of T cells",
                    "Can release IL-1"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "CD8+ cells kill their targets:",
                options: [
                    "Following recognition of peptides on MHC class I molecules",
                    "By activation of the alternative complement pathway",
                    "By insertion of perforin molecules into target membranes",
                    "By binding via Fc receptors to antibody-coated targets"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "A sharp increase in levels of IgG, with a spike in the IgG region seen in the electrophoretic pattern of serum proteins, is an indication of:",
                options: [
                    "IgA and IgM deficiency",
                    "Multiple myeloma",
                    "Macroglobulinemia",
                    "Hypogammaglobulinemia",
                    "Severe fungal infections"
                ],
                correctAnswers: [1]
            },
            {
                question: "A 2-year-old child has three episodes of pneumonia and two episodes of otitis media. All the infections were demonstrated to be pneumococcal. Which of the following disorders is most likely to be the cause?",
                options: [
                    "An isolated transient T-cell deficiency",
                    "A combined T- and B-cell deficiency",
                    "A B-cell deficiency",
                    "Transient anaemia",
                    "The child has AIDS"
                ],
                correctAnswers: [2]
            },
            {
                question: "The lesions in immune complex-induced glomerulonephritis:",
                options: [
                    "Are dependent on erythrocytes and complement",
                    "Result in increased production of urine",
                    "Require both complement and neutrophils",
                    "Are dependent on the presence of macrophages",
                    "Require all nine components of complement"
                ],
                correctAnswers: [2]
            }
        ], // Close Section "3"

"4": [ // Open Section "4"
    {
        question: "Patient with DiGeorge syndrome who survived beyond infancy would be incapable of:",
        options: [
            "Rejecting a bone marrow transplant",
            "Mounting DHT (Delayed Hypersensitive T cells) response to dinitrochlorobenzene",
            "Resisting intracellular parasites",
            "Forming antibody to T-independent antigens"
        ],
        correctAnswers: [0, 1, 2]
    },
    {
        question: "Immunologic tolerance:",
        options: [
            "Involves only humoral immunity",
            "Involves only cell-mediated immunity",
            "May involve only some antigenic determinants on a protein",
            "Is induced with ease in adults",
            "Is best achieved with particulate antigens"
        ],
        correctAnswers: [2]
    },
    {
        question: "Autoimmune diseases due to antibody may occur:",
        options: [
            "As a consequence of antigen-antibody complexes",
            "As a result of antibody blocking a cell receptor",
            "As a result of antibody-induced complement mediated lysis",
            "As a result of all the above"
        ],
        correctAnswers: [3]
    },
    {
        question: "The MHC complex contains the following EXCEPT:",
        options: [
            "Genes that encode transplantation antigens",
            "Genes that encode immunoglobulins",
            "Genes that encode immune responsiveness",
            "Genes that encode some components of complement",
            "Genes that encode class I and II antigens"
        ],
        correctAnswers: [1]
    },
    {
        question: "Transplant rejection may involve the following:",
        options: [
            "Cell-mediated immunity",
            "Type III (immune aggregate) hypersensitivity",
            "Complement-dependent cytotoxicity",
            "The release of IFN-g"
        ],
        correctAnswers: [0, 1, 2, 3]
    },
    {
        question: "Tumour progression is favoured by:",
        options: [
            "Cytotoxic T lymphocytes",
            "Suppressor T lymphocytes",
            "Presence of interferon",
            "Presence of “blocking” factors"
        ],
        correctAnswers: [1, 3]
    },
    {
        question: "The occurrence of mononucleosis syndrome few weeks after renal transplantation may direct to:",
        options: [
            "CMV",
            "HIV",
            "Staphylococci",
            "Herpes virus type 2",
            "Plasmodium falciparum"
        ],
        correctAnswers: [0, 3]
    },
    {
        question: "The germinal centre found in the cortical region of lymph nodes and the peripheral region of splenic periarteriolar lymphatic tissue:",
        options: [
            "Support the development of virgin immunocompetent lymphocytes",
            "Function in the removal of damaged erythrocytes from the circulation",
            "Act as the major source of stem cells and thus help to maintain haematopoiesis",
            "Provide an infrastructure that upon antigenic stimulation contains large populations of B lymphocytes and plasma cells"
        ],
        correctAnswers: [3]
    },
    {
        question: "An immunologic adjuvant is a substance that:",
        options: [
            "Reduces the toxicity of the immunogen",
            "Enhances the immunogenicity of haptens",
            "Enhances haematopoiesis",
            "Enhances the immune response against the immunogen"
        ],
        correctAnswers: [3]
    },
    {
        question: "The class-specific antigenic determinants (epitopes) of immunoglobulins are associated with:",
        options: [
            "L chains",
            "J chains",
            "Disulphide bonds",
            "H chains",
            "Variable regions"
        ],
        correctAnswers: [0, 3]
    },
    {
        question: "The relative level of specific IgM antibodies can be of diagnostic significance because:",
        options: [
            "IgM is easier to detect than other isotypes",
            "Viral infection often results in very high IgM responses",
            "IgM antibodies are more often protective against reinfections than are the other isotypes",
            "Relative high levels of IgM often correlate with a first recent exposure to the inducing agent"
        ],
        correctAnswers: [3]
    },
    {
        question: "An antigen-antibody immune complex in a C3-deficient individual will result in:",
        options: [
            "Anaphylatoxin production",
            "Depression of factor B",
            "Production of chemotactic factors",
            "Activation of C2"
        ],
        correctAnswers: [3]
    },
    {
        question: "Endosomal antigen processing:",
        options: [
            "Results in production of antigenic peptides that can associate with the same class II molecule",
            "May result in the activation of CD4+ T cells",
            "May result in a peptide-MHC class II complex for which there is no T cell receptor",
            "Does not lead to the activation of CD8+ T cells",
            "All of the above"
        ],
        correctAnswers: [4]
    },
    {
        question: "The most common clinical consequence(s) of C3 deficiency is/are:",
        options: [
            "Increased incidence of tumours",
            "Increased susceptibility to viral infections",
            "Increased susceptibility to fungal infections",
            "Increased susceptibility to bacterial infections"
        ],
        correctAnswers: [1, 2, 3]
    },
    {
        question: "A 9-month-old baby was vaccinated against smallpox with attenuated smallpox virus. He developed a progressive necrotic lesion of the skin, muscles, and subcutaneous tissue at the site of the inoculation. The vaccination reaction probably resulted from:",
        options: [
            "B-lymphocyte deficiency",
            "Reaction to the adjuvant",
            "Complement deficiency",
            "T-cell deficiency"
        ],
        correctAnswers: [1]
    },
    {
        question: "The final damage to vessels in immune complex mediated arthritis is due to:",
        options: [
            "Lymphokines from T cells",
            "Histamine and SRS-A",
            "C5,6,7,8,9 attack complex",
            "Lysosomal enzymes of polymorphonuclear leukocytes",
            "Cytotoxic T cells"
        ],
        correctAnswers: [3]
    },
    {
        question: "Interferon-γ:",
        options: [
            "Is synthesised in macrophages",
            "Is released as a consequence of antigen- or mitogen-induced activation of T lymphocytes",
            "Specially binds to the antigen that induces its release",
            "Induces macrophages to ingest and destroy bacteria in a nonspecific fashion"
        ],
        correctAnswers: [1, 3]
    },
    {
        question: "Important elements in the formation of the B- and T-cell repertoire are:",
        options: [
            "Rearrangement and splicing of VDJ genes",
            "Secretion of IL-2 from CD4+ cells",
            "Exposure to antigen of B cells carrying only sIgM as a receptor",
            "Involution of the thymus in old age"
        ],
        correctAnswers: [0, 2]
    },
    {
        question: "The following is/are possible mechanism for the development of autoimmune diseases:",
        options: [
            "Alteration of a self-antigen so it is recognised as foreign",
            "Leakage of sequestered self-antigen",
            "Loss of suppressor T cells",
            "Infection with a microorganism that carries a cross-reactive antigen"
        ],
        correctAnswers: [0, 2, 3]
    },
    {
        question: "The most common serologic test used for the detection of HLA antigens on lymphocytes is:",
        options: [
            "The complement fixation test",
            "Double gel diffusion",
            "Complement-dependant cytotoxic test",
            "Mixed lymphocytes reaction",
            "Radioimmunoassay"
        ],
        correctAnswers: [2, 3]
    }
], // Close Section "4"

"5": [ // Open Section "5"
{
    question: "In clinical transplantation, cytotoxic antibodies:",
    options: [
        "Cause delayed rejection of the transplant",
        "Are responsible for hyperacute rejection",
        "Cause rejection when present in the donor",
        "May be directed against HLA antigens"
    ],
    correctAnswers: [1, 3]
},
{
    question: "Tumour antigens have been shown to cross-react immunologically in cases of:",
    options: [
        "Tumour induced by chemical carcinogens",
        "Tumour induced by RNA viruses",
        "All tumours",
        "Tumour induced by irradiation with ultraviolet light",
        "Tumour induced by the same chemical carcinogen on two separate sites on the same individual"
    ],
    correctAnswers: [1]
},
{
    question: "Which of the following are non-organ-specific (systemic) autoimmune disease?",
    options: [
        "Myasthenia gravis",
        "Systemic lupus erythematosus (SLE)",
        "Hashimoto’s thyroiditis",
        "Rheumatoid arthritis"
    ],
    correctAnswers: [1, 3]
},
{
    question: "The graft-vs-host reactions (GvHR) in case of transplantation of haematopoietic stem cells:",
    options: [
        "Is due to insufficient compatibility between donor and recipient",
        "Is mediated by the donor’s mature lymphocytes and is targeted at the allogeneic differences in recipient",
        "Clinical symptoms are rash, severe diarrhoea and jaundice"
    ],
    correctAnswers: [0, 1, 2]
},
{
    question: "Which of the following examinations is necessary to determine the level of repopulation of donor cells after transplantation of haematopoietic stem cells?",
    options: [
        "Immunoglobulins",
        "Chimerism",
        "CRP",
        "Lymphocyte subpopulations"
    ],
    correctAnswers: [1]
},
{
    question: "The human MHC (HLA) genes can be described as all of the following EXCEPT:",
    options: [
        "Autosomal",
        "X-linked",
        "Codominant",
        "Polymorphic",
        "Located on same chromosome"
    ],
    correctAnswers: [1]
},
{
    question: "Which of the following immune deficiency disorders is associated exclusively with an abnormality of the humoral immune response:",
    options: [
        "X-linked agammaglobulinemia",
        "DiGeorge syndrome",
        "Wiskott-Aldrich syndrome",
        "Chronic mucocutaneous candidiasis",
        "Hereditary angioneurotic oedema"
    ],
    correctAnswers: [0]
},
{
    question: "Patients with DiGeorge syndrome may fail to produce IgG in response to immunisation with T-dependant antigens because:",
    options: [
        "They have a decreased number of B cells which produce IgG",
        "They have increased numbers of suppressor T cells",
        "They have decreased numbers of helper T cells",
        "They have abnormal APCs",
        "They cannot produce IgM during primary responses"
    ],
    correctAnswers: [2]
},
{
    question: "The glomerular lesions in immune complex disease can be visualised microscopically with a fluorescent antibody against:",
    options: [
        "IgG heavy chains",
        "k-light chains",
        "C1",
        "C3",
        "All of the above"
    ],
    correctAnswers: [4]
},
{
    question: "Cell-mediated immune responses are:",
    options: [
        "Enhanced by depletion of complement",
        "Suppressed by cortisone",
        "Enhanced by depletion of T cells",
        "Suppressed by antihistamine",
        "Enhanced by depletion of macrophages"
    ],
    correctAnswers: [1]
},
{
    question: "Immunologic unresponsiveness, induced by immunosuppressive drugs, is different from immunological tolerance because:",
    options: [
        "Only B cells are affected by the drugs",
        "Only T cells are affected by the drugs",
        "Liver enzymes are involved in the former and not in the latter",
        "Drug-induced unresponsiveness is not antigen-specific, but tolerance is",
        "Drug-induced unresponsiveness is antigen-specific, but tolerance is not"
    ],
    correctAnswers: [3]
},
{
    question: "Which of the following is/are TRUE? Tumour development is related to:",
    options: [
        "Initial uncontrolled polyclonal proliferation",
        "Initial uncontrolled monoclonal proliferation stable in time",
        "Initial uncontrolled monoclonal proliferation followed by polyclonal proliferation",
        "Initial uncontrolled polyclonal proliferation followed by monoclonal proliferation"
    ],
    correctAnswers: [2]
},
{
    question: "Rheumatoid factor is most frequently found to be:",
    options: [
        "IgM reacting with k-chain of IgG",
        "IgM reacting with H-chain determinants of IgG",
        "IgE reacting with bacterial antigens",
        "Antibody to collagen",
        "Antibody to DNA"
    ],
    correctAnswers: [1]
},
{
    question: "For the occurrence of GvHR in case of transplantation of HSC, it is necessary that:",
    options: [
        "The recipient is able to reject the graft",
        "There is incompatibility between the donor and the recipient",
        "The grafting is done intravenously",
        "The donor is conditioned properly",
        "The graft is of immunocompromised cells"
    ],
    correctAnswers: [1, 4]
},
{
    question: "Which of the following are primary lymphoid organs?",
    options: [
        "Lymph node",
        "Spleen",
        "Thymus",
        "Bone marrow"
    ],
    correctAnswers: [2, 3]
},
{
    question: "Which of the following is NOT TRUE?",
    options: [
        "The term epitope is synonymous with antigen",
        "A viral protein may contain a large number of epitopes that are capable of interacting with many different specific antibodies",
        "Immunologic receptors on T cells recognise presented by APC epitopes"
    ],
    correctAnswers: [0]
},
{
    question: "The initiation of the formation of the membrane attack complex begins with:",
    options: [
        "Cleavage of the C5 component into C5a and C5b by C5-convertase",
        "Cleavage of the C5 component into C5a and C5b by C3-convertase of the classical pathway",
        "Cleavage of the C5 component into C5a and C5b by C3-convertase of the alternative pathway",
        "Binding of C6 to C5b"
    ],
    correctAnswers: [0]
},
{
    question: "Which statements are CORRECT?",
    options: [
        "IL-4 is synthesised by T lymphocytes",
        "IL-4 is synthesised by B lymphocytes",
        "IL-4 stimulates T and B cell differentiation, IgE and IgER induction",
        "IL-4 stimulates growth and differentiation of granulocytes"
    ],
    correctAnswers: [0, 2]
},
{
    question: "The very first line of defence includes:",
    options: [
        "Adaptive immune response",
        "Skin and mucous membranes",
        "Inflammatory response",
        "Complement system"
    ],
    correctAnswers: [1]
},
{
    question: "Cells are marked with monoclonal antibodies most often by using immunofluorescence technique, which is two kinds:",
    options: [
        "Indirect and non-competitive",
        "Direct and indirect",
        "Direct and competitive"
    ],
    correctAnswers: [1]
},
], // Close Section "5"

"6": [ // Open Section "6"
  {
    question: "Immunodeficiency diseases may result from:",
    options: [
      "Defect in the T cell development",
      "Defect in the development of stem cells in the bone marrow??",
      "Defect in phagocytic function",
      "Defect in the complement function"
    ],
    correctAnswers: [0, 2, 3]
  },
  {
    question: "Which statement about the deficiencies of phagocytic cells is NOT TRUE?",
    options: [
      "In these deficiencies leukocytosis is usually observed",
      "In these deficiencies leukopenia is usually observed",
      "Low expression of CD18 and CD11b molecules can be observed",
      "There are disorders in the secretion of a number of pro-inflammatory cytokines"
    ],
    correctAnswers: [0]
  },
  {
    question: "One of the following is not typical for secondary immunodeficiency:",
    options: [
      "Severe burns",
      "Uraemia",
      "Protracted infection with Epstein-Barr virus",
      "Congenital defect in the complement system"
    ],
    correctAnswers: [3]
  },
  {
    question: "Which of the following cell types is thought to function in preventing immune responses against self-antigens?",
    options: [
      "Treg cells",
      "B cells",
      "T memory cells",
      "Th cells"
    ],
    correctAnswers: [0]
  },
  {
    question: "Glomerulonephritis associated with pulmonary haemorrhage is referred to as:",
    options: [
      "Pemphigus vulgaris",
      "Goodpasture’s syndrome",
      "Systemic lupus erythematosus",
      "Wegener’s granulomatosis"
    ],
    correctAnswers: [1]
  },
  {
    question: "Rejection reactions may be due to:",
    options: [
      "Cell-mediated immunity",
      "Type III (immune complex) DTH",
      "Complement-dependent cytotoxicity",
      "Release of IFN-g"
    ],
    correctAnswers: [0, 1, 2, 3]
  },
  {
    question: "Immunosuppressive therapy in transplant patients significantly increases the risk of:",
    options: [
      "Infections (including opportunistic)",
      "EBV-associated lymphoproliferative disorder",
      "Skin cancer",
      "Haemolytic anaemia"
    ],
    correctAnswers: [0, 1]
  },
  {
    question: "Which statements are CORRECT?",
    options: [
      "A panel of monoclonal antibodies with a known specificity is used in the complement-dependent microlymphocytotoxic test for HLA typing",
      "The complement-dependent microlymphocytotoxic test is primarily for HLA class I typing and has limited use in HLA class II typing",
      "Monocytes are used as target cells in the complement-dependent microlymphocytotoxic test for monocytes"
    ],
    correctAnswers: [0, 1]
  },
  {
    question: "Which of the following statements is/are TRUE?",
    options: [
      "HLA class I and class II molecules are cell surface proteins involved in antigen presentation",
      "HLA class III region codes molecules with immunological functions",
      "HLA class I molecules are predominantly endo-antigens of CD8+ T lymphocytes",
      "HLA class I molecules are predominantly exo-antigens of CD4+ T lymphocytes",
      "HLA class II molecules are heterodimers consisting of one a and one b chain"
    ],
    correctAnswers: [0, 1, 2, 4]
  },
  {
    question: "Which one is ALLELE?",
    options: [
      "HLA-A*02",
      "HLA-A*02:01",
      "HLA-A2"
    ],
    correctAnswers: [1]
  },
  {
    question: "Monoclonal immunoglobulins are:",
    options: [
      "Produced by hybridoma cells",
      "Produced in haematological malignancies",
      "Used for disease treatment",
      "Used in the immunodiagnostic tests",
      "Only in laboratory produced molecules"
    ],
    correctAnswers: [0, 1, 2, 3]
  },
  {
    question: "AIDS is caused by a human retrovirus that kills:",
    options: [
      "B lymphocytes",
      "CD4+ T cells",
      "CD8+ T cells",
      "NK cells",
      "Neutrophils"
    ],
    correctAnswers: [1]
  },
  {
    question: "NK cells are:",
    options: [
      "Able to kill virus-infected cells without prior sensitisation",
      "Increased by immunisation",
      "Cells producing antibodies",
      "Cells with phagocytic function"
    ],
    correctAnswers: [0]
  },
  {
    question: "If an individual is genetically unable to make J chains, which immunoglobulin(s) will be affected:",
    options: [
      "IgG",
      "IgM",
      "IgG and IgM",
      "IgM and IgA",
      "IgA",
      "IgA and IgG"
    ],
    correctAnswers: [1, 3, 4]
  },
  {
    question: "Each of the following statements concerning HLA class II molecules is correct EXCEPT:",
    options: [
      "They are found on the surface of all B and T cells",
      "They have a high degree of polymorphism",
      "They have a binding site for CD4 molecules"
    ],
    correctAnswers: [0]
  },
  {
    question: "Basic Methods for assessment of immune complexes in vasculitis is:",
    options: [
      "Immunoturbidimetry",
      "Flow cytometry",
      "Radial immunodiffusion",
      "Immunohistochemical methods"
    ],
    correctAnswers: [3]
  },
  {
    question: "Match the following innate immune system cell type with their function. Neutrophils:",
    options: [
      "Phagocytosis, bactericidal mechanisms and antigen presentation",
      "Lysis of some virally infected cells",
      "Killing of parasites",
      "Release of histamine and other mediators",
      "Phagocytosis and bactericidal mechanisms"
    ],
    correctAnswers: [4]
  },
  {
    question: "Which of the following regarding effect antigens is NOT TRUE?",
    options: [
      "Foreign to the host",
      "Fairly large (molecular weight >10,000)",
      "Chemically complex",
      "Requires a carrier-conjugate to cause the generation of antibodies"
    ],
    correctAnswers: [1, 3]
  },
  {
    question: "Indicate which of the following components of the complement system are anaphylatoxins:",
    options: [
      "C3b",
      "C3a",
      "C5b",
      "C5a"
    ],
    correctAnswers: [1, 3]
  },
  {
    question: "An antibody is an example of opsonin:",
    options: [
      "True",
      "False",
      "It depends on the isotype of Ig"
    ],
    correctAnswers: [0]
},
], // Close Section "6"

"7": [ // Open Section "7"
{
    question: "Adaptive defence system includes:",
    options: [
      "Acquired immune response",
      "Skin and mucous membranes",
      "Acute inflammatory response",
      "Immunohistochemical methods"
    ],
    correctAnswers: [0]
  },
  {
    question: "Antigen markers of B lymphocytes are:",
    options: [
      "CD19, CD20, CD5, CD21",
      "CD2, CD5, CD16",
      "CD19, CD23, CD5",
      "CD19, CD20, CD21"
    ],
    correctAnswers: [3]
  },
  {
    question: "Which statements are CORRECT?",
    options: [
      "Crossmatch is performed to determine the anti-donor antibodies in the recipient",
      "Crossmatch is performed regularly while the recipients are waiting for transplantation",
      "The flow cytometric crossmatch is more sensitive compared to the complement-dependent microlymphocytotoxic test"
    ],
    correctAnswers: [0, 2]
  },
  {
    question: "Immunological findings in the severe combined immunodeficiencies are (indicate the correct answer(s)):",
    options: [
      "Reduced serum level of immunoglobulins",
      "Abnormalities in the leukocyte adhesion",
      "Decreased/lacking T lymphocytes",
      "Prevalence of memory phenotype when T lymphocytes are present"
    ],
    correctAnswers: [0, 2]
  },
  {
    question: "CD45 RA is expressed on:",
    options: [
      "Activated Cells",
      "Memory Cells",
      "Naïve T - Cells"
    ],
    correctAnswers: [2]
  },
  {
    question: "Upon T cell activation there is an increase in the expression of activation markers in the following sequence:",
    options: [
      "CD71, HLA-DR, CD25",
      "CD25, CD71, HLA-DR",
      "HLA-DR, CD25, CD71"
    ],
    correctAnswers: [1]
  }
] // Close Section "7"
} // Close Document "1"

};

// ✅ Function to load and display questions
let currentQuestionIndex = 0;
let score = 0; // Tracks the correct answers
let questions = [];

function loadQuestions() {
    if (!window.location.href.includes("questions.html")) return;

    const documentId = getDocumentId();
    const sectionId = getSectionId();

    if (!documentId || !sectionId) {
        document.getElementById("question-title").innerText = "Error: No section selected!";
        return;
    }

    questions = questionData[documentId]?.[sectionId] || [];

    if (questions.length === 0) {
        document.getElementById("question-title").innerText = "No questions found!";
        return;
    }

    currentQuestionIndex = 0;
    questions = shuffleArray(questions);
    displayQuestion();
}

// ✅ Function to display the current question
function displayQuestion() {
    if (!questions || questions.length === 0) {
        console.error("No questions found!");
        return;
    }

    if (currentQuestionIndex >= questions.length) {
        showScoreSummary();
        return;
    }

    let questionData = questions[currentQuestionIndex];
    document.getElementById("question-number").innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    document.getElementById("question-text").innerText = questionData.question;
    document.getElementById("answer-options").innerHTML = questionData.options.map((option, index) =>
        `<label><input type="checkbox" value="${index}"> ${option}</label><br>`
    ).join("");

    document.getElementById("feedback-message").innerText = "";

    // ✅ Ensure "Submit Answer" is visible and enabled
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.innerText = "✅ Submit Answer";
    submitBtn.disabled = true;
    submitBtn.onclick = validateAnswer;

    // ✅ Ensure "Next Question" is disabled initially
    let nextBtn = document.getElementById("next-btn");
    nextBtn.disabled = true;

    // ✅ Ensure "Previous Question" button is enabled correctly
    document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;

    // ✅ Enable Submit Button Only When an Answer is Selected
    document.querySelectorAll("#answer-options input").forEach(input => {
        input.addEventListener("change", () => {
            submitBtn.disabled = false;
        });
    });
}

// ✅ Function to validate the answer and update the score
function validateAnswer() {
    const selectedAnswers = [...document.querySelectorAll("#answer-options input:checked")].map(input => parseInt(input.value));
    const correctAnswers = questions[currentQuestionIndex].correctAnswers;

    let isCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer));

    // ✅ Highlight Correct and Incorrect Answers
    document.querySelectorAll("#answer-options input").forEach(input => {
        input.parentElement.classList.remove("correct", "incorrect");
        if (correctAnswers.includes(parseInt(input.value))) {
            input.parentElement.classList.add("correct");
        } else if (selectedAnswers.includes(parseInt(input.value))) {
            input.parentElement.classList.add("incorrect");
        }
    });

    // ✅ Update the Score if the Answer is Correct
    if (isCorrect) {
        score++; // ✅ This line was missing!
    }

    // ✅ Disable Submit Button and Enable "Next Question"
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;

    let nextBtn = document.getElementById("next-btn");
    nextBtn.disabled = false;
}

// ✅ Function to navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showScoreSummary();
    }
}

// ✅ Function to navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// ✅ Function to shuffle an array (Randomize questions)
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ✅ Function to show score summary at the end
function showScoreSummary() {
    document.getElementById("question-title").innerText = "Section Completed!";
    document.getElementById("question-text").innerText = `Your Score: ${score} / ${questions.length}`;

    document.getElementById("answer-options").innerHTML = ""; // Clear answers
    document.getElementById("feedback-message").innerText = ""; // Clear feedback

    document.getElementById("submit-btn").style.display = "none"; // Hide Submit button
    document.getElementById("prev-btn").style.display = "none"; // Hide Previous button
    document.getElementById("next-btn").style.display = "none"; // Hide Next button

    // ✅ Create "Back to Sections" button
    const backToSectionsBtn = document.createElement("button");
    backToSectionsBtn.innerText = "🔙 Back to Sections";
    backToSectionsBtn.id = "back-to-sections-btn";
    backToSectionsBtn.onclick = goBackToSections;

    document.querySelector(".container").appendChild(backToSectionsBtn);
}

// ✅ Load functions based on the page
window.onload = function() {
    if (window.location.href.includes("sections.html")) {
        loadSections();
    } else if (window.location.href.includes("questions.html")) {
        loadQuestions();
    }
};
