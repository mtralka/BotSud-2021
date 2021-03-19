content = {
    basicInfo: {
        title:
            "Climb every mountain (and take a photo): social media photos and plant conservation in the Northern Ticino Alps.",
        year: 2021,
        authors: [
            {
                name: "Brack W. Hale",
                affiliation: "Franklin University Switzerland",
                email: "bhale@fus.edu",
            },
            {
                name: "Matthew Tralka",
                affiliation: "University of Maryland, College Park",
                email: "mtralka@umd.edu",
            },
            {
                name: "Lily Pifferini-Carter",
                affiliation: "Franklin University Switzerland",
                email: "l.pifferinicarter@student.fus.edu",
            },
        ],
        sections: ['introduction', 'method', 'results', 'conclusion', 'literature', 'appendix']
    },
    introduction: {
        title: "Introduction",
        body:
            `Knowledge about plant species on the landscape is vital for biodiversity conservation. Volunteer monitoring often complements official monitoring programs. However, landscapes are large and adequate coverage is necessary for effective management, particularly for endangered and rare species, and species with invasive potential. In recent years, photos posted on social media have become an important supplementary source of data in remote locations (e.g. Wood et al. 2013; Di Minin et al. 2015). A recent review of the literature found they can provide greater spatial coverage than conventional monitoring (Ghermandi and Sinclair 2019). However, few studies have employed these data for biodiversity monitoring, particularly with respect to plants. This study investigates the potential use of publicly shared, geotagged photos on social media for conservation purposes. Specially, it uses photos geotagged in the subalpine and alpine zones of Northern Ticino, Switzerland to examine:
            `,
        objectives: ['the frequency and level of accuracy of plants documented in shared photos',
            'the potential application of this content for conservation purposes', 'insights into plant diversity and human behavior from the spatial patterns of the photos']
    },
    method: {
        title: "Methods",
        body: `We downloaded metadata from all publicly-accessible, geotagged photos on Flickr within 
        the study area (Figure 1) posted April - October 2015 – 20201, using Flickr’s application programming 
        interface (API) through a software GUI developed by one author. Our dataset only included those photos 
        taken above 1500 masl and with a locational accuracy level of 13 or higher (N=5788). We filtered the data 
        further to 10 photos per year per user to compromise between a larger sample capturing many photos and a 
        sampling method that prevented single users with larger numbers of photos from dominating the dataset.`,
        body2: `We performed a content analysis of the dataset (N=540) using a semi-automated program developed by 
        one author to categorize the main subjects of the photo, focusing specifically on natural objects and visible plants. 
        We identified plants to genus or species and tabulated the resulting taxa. We compared these taxa to the Red, Black, and 
        Watch list species in Ticino, as well as the list of symbolic species of the European Alps (sensu Schirpke et al. 2013). 
        Next, we compared these results to tags and comments users posted with the photos. Lastly, we analyzed the spatial distribution 
        of the photos with respect to the closest road, trail, and mountain hut (Figure 2). To perform the spatial filtering and data 
        analysis, we used QGIS 3.10 (coordinate reference system: CH 1903/LV03). We used STATA 15.1 for statistical analyses (α = 0.05).`,
        image: 'methods.jpg',
        imageCaption: 'Figure 1: Study Area'
    },
    results: {
        title: "Results",
        body: [
            {
                title: "Relatively few photos contain identifiable plants (14.8%) ",
                image: "results_1.png",
                imageCaption: "Figure 3: Most commonly identifiable genera in photos",
                body:
                    "The vast majority of photos do not contain plants as a subject and thus do not contribute to \
            identifying specific taxa. However, the content analysis yielded more than six times as many \
            photos containing identifiable plants than simply photos with plant-related tags (2.4%). \
            Identifiable plants came from 26 genera, the most common being Larix, Epilobium, and Eriophorum \
            (Figure 3, see online appendix for full list). When looking at comments, users rarely identified taxa (5%), \
            but were generally correct (100%) when they did.",
            },
            {
                title:
                    "Identified taxa did not contain species of particular interest for conservation.",
                body:
                    "All identified taxa are considered common plants; none were on the Red, Black, or \
          Watch Lists in Canton Ticino (Infoflora 2020). Conspicuously missing were Orchidaceae species \
          and two “symbolic” floral taxa of the Alps (sensu Schirpke et al 2013): Gentiana (acaulis and clusii) \
          and Leontopodium alpinum, despite all of these species being in the study area. This might be due in \
          part to the level of botanical knowledge of the photographers, to the specific demographic of Flickr users, \
          or to the sample size used. Further research should be done before excluding the effectiveness of using geotagged \
          photos to identify species with particularly conservation value. ",
            },
            {
                title:
                    "Photos with plants showed spatial trends compared to the other photos.",
                image: "results_3.jpg",
                imageCaption: "Figure 4: Distance of plant and no plant photos to huts, trails, and roads (columns in the same category with different letters differ significantly).",
                body:
                    "Student’s t-tests showed that photos with plants were significantly closer \
            to huts (p< 0.001) and further from roads than photos without plants (p< 0.001); there \
            was no significant difference with respect to distance from trails (Figure 4). These findings \
            suggest that users interested in plants and natural landscapes tend to leave the roads and go \
            deeper into natural landscapes (assuming huts are a good proxy for such) than other users. \
            Thus, there is the potential that photos from such users can help identify biodiversity hotspots \
            in more remote areas.  It also suggests that a substantial amount of users may be leaving trails to take photos. \
            Combining this type of data with information on landscape sensitivity (e.g. Hale 2018, Ólafsdóttir and Runnström 2011) \
            to degradation may help identify areas of potential deterioration that need interventions.",
            },
        ],
    },
    conclusion: {
        title: "Conclusion",
        body: `Our findings demonstrate that a visual content analysis captures more identifiable taxa than does a 
        simple analysis of user-generated content. Nonetheless, the photos in this dataset did not indicate species 
        requiring special protection (e.g. endangered species) or requiring special management (e.g. Watch or Black List species). 
        This does not mean that an analysis of photos on social media would never do so and perhaps this is only an artifact of the 
        photo sampling methodology used here.
        <br/>
        <br/>
        That methodology resulted in an analysis of ten percent of the photos taken in this time period 
        in the study area and thus limited the amount of data on plants produced. In the case where the sole objective 
        is to extract the maximum amount of information about species presence from photos, sampling more photos is better 
        and ideally sampling every photo could result in greatly increased information. However, manually processing all 
        photos would be a labor-intensive activity. In the future, we aim to leverage both traditional morphological processing 
        and machine-learning based approaches (e.g. Jordan and Mitchell 2015) to decrease manual classification labor requirements. 
        Combined with our preexisting automated data acquisition and processing pipeline, we aim for future research to increase 
        in spatial scale and data size exponentially.
        <br/>
        <br/>
        Additionally, the platform used here, Flickr, represents a relatively small share of on-line photos and a specific user 
        demographic, primarily professional photographers (as documented in Tenkanen et al. 2017; Hale 2018). Flickr data are often 
        used for research purposes due to relative ease of access. However, other social media platforms have much larger, and more 
        diverse users; as such, they represent rich, albeit difficult to access, potential sources of data. 
        <br/>
        <br/>
        Overall, our study shows that publicly-available photos posted to social media represent an important potential source of 
        data about the flora of landscapes. Proper sampling methodologies are important to extract the desired information from the dataset. 
        It also shows that visitors, while not always explicitly recognizing it, appreciate the flora of mountain areas by taking photos of 
        plants and natural landscapes. However, they may be less able to distinguish what they are documenting and their behavior may not always 
        be environmentally-friendly. As such, the data in these photos could also inform for visitor education and management programs.
        <br/>
        <br/>
        `,
    },
    literature: {
        title: "Literature",
        body: [`Ghermandi A and Sinclair M. 2019. Passive crowdsourcing of social media in environmental research: A systematic map. Glob Environ Chang 55: 36–47.`,
            `Hale BW. 2018. Mapping Potential Environmental Impacts from Tourists Using Data from Social Media: A Case Study in the Westfjords of Iceland. Environ Manage 62: 446–57`,
            `Info flora. 2020. The National Data and Information Center on the Swiss Flora. https://www.infoflora.ch  Date accessed: 20 August 2020.`,
            `Jordan MI and Mitchell TM. 2015. Machine learning: Trends, perspectives, and prospects. Science (80- ) 349: 255 LP – 260.`,
            `Minin E Di, Tenkanen H, and Toivonen T. 2015. Prospects and challenges for social media data in conservation science. Front Environ Sci 3: 63`,
            `Ólafsdottir R and Runnström MC. 2009. A GIS approach to evaluating ecological sensitivity for tourism development in fragile environments. A case study from SE Iceland. Scand J Hosp Tour 9: 22–38.`,
            `Schirpke U, Meisch C, and Tappeiner U. 2018. Symbolic species as a cultural ecosystem service in the European Alps: insights and open issues. Landsc Ecol 33: 711–30.`,
            `Tenkanen H, Minin E Di, Heikinheimo V, et al. 2017. Instagram, Flickr, or Twitter: Assessing the usability of social media data for visitor monitoring in protected areas. Sci Rep 7: 17615.`,
            `Wood SA, Guerry AD, Silver JM, et al. 2013. Using social media to quantify nature-based tourism and recreation. Sci Rep 3: 17–38.`]

    },
    appendix: {
        title: "Appendix",
        body: null,
    }
}

export default {
    content
}