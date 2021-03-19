content = {
    basicInfo: {
        title:
            "Climb every mountain (and take a photo): social media photos and plant conservation in the Northern Ticino Alps.",
        year: 2021,
        authors: [
            {
                name: "Brack W. Hale",
                affiliation: "Franklin University Switzerland",
                email: "email",
            },
            {
                name: "Matthew Tralka",
                affiliation: "University of Maryland, College Park",
                email: "mtralka@umd.edu",
            },
            {
                name: "Lily Pifferini-Carter",
                affiliation: "Franklin University Switzerland",
                email: "email",
            },
        ],
        sections: ['introduction', 'method', 'results', 'conclusion', 'appendix']
    },
    introduction: {
        title: "Introduction",
        body:
            "Geotagged photos posted to social media provide a potential source of information on the biodiversity of landscapes...\
              This is a pilot study to investigate how well plant diversity is documented in publicly shared, geotagged photos on social media \
              and its potential use for conservation purposes. Specially, it uses photos taken in Northern Ticino in or above the subalpine zone \
              to examine: The frequency and level of accuracy of plants documented in shared photos, \
          The potential application of this content for conservation purposes, and\
          Insights into plant diversity and human behavior from the spatial patterns of the photos.",
    },
    method: {
        title: "Methods",
        body: `We downloaded metadata from all publicly-accessible, geotagged photos on Flickr taken within the study area (Figure 1) during April - October 2015 – 2020[1], using Flickr’s application programming interface (API) through a software GUI developed by one of the authors. Our final dataset only included those photos taken above 1500 masl and with a locational accuracy level of 13 or higher (N=5788). We then filtered the data further to 10 photos per year per user to find a compromise between a larger sample to capture as many photos as possible, yet to prevent the largest users (who uploaded 100’s of photos) from dominating the dataset. We performed a content analysis of the resulting photo dataset (N=540) using a semiautomated program developed by one of the authors to categorize the main objects of the photo, focusing specifically on natural objects, in particular visible plants. We identified plants in photos to genus or species and tabulated the resulting taxa. We compared these taxa to the Red, Black, and Watch list species in Ticino, as well as the list of symbolic species of the European Alps (sensu Schirpke et al. 2013).  Next, we compared these results to tags the users posted with the photos. Lastly, we analyzed the spatial distribution of the photos containing plants to the other photos with respect to the closest road, trail, and mountain hut (Figure 2). To perform the spatial filtering and analysis of the data, we used QGIS 3.10 and a spatially-relevant coordinate reference system (CH 1903/LV03). We used STATA 15.1 for statistical analyses (α = 0.05).`,
    },
    results: {
        title: "Results",
        body: [
            {
                title: "Relatively few photos contain identifiable plants (14.8%) ",
                image: "logo.png",
                imageCaption: "Caption",
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
        body: `Our initial findings demonstrate that a visual content analysis captures more identifiable taxa than a simple analysis of user-generated content does. Nonetheless, the photos in this dataset did not provide did not provide useful information on species requiring special protection (e.g. endangered species) or requiring special management (e.g. Watch or Black List species). This does not mean that an analysis of photos on social media would never do so. 
        `,
    },
    appendix: {
        title: "Appendix",
        body: `TEMPLATE`,
    }
}

export default {
    content
}