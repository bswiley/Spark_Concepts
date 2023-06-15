const { Comment } = require('../models');

const commentData = [
  {
    comment: "The concept for the 'Autumn Splendor' quilting project is absolutely captivating! The vision of drawing inspiration from the vibrant colors and textures of the fall season shows great promise. The selection of rich hues and varied fabrics, along with the incorporation of traditional block patterns, hints at a quilt that will beautifully capture the essence of autumn. Imagining the intricate piecing, skillful arrangement, and meticulous quilting that will bring this project to life fills me with anticipation. I can envision how the final presentation, with thoughtful backing fabric and binding, will add a polished touch. I eagerly look forward to seeing the finished 'Autumn Splendor' quilt and how it will envelop its surroundings with the warmth and beauty of the fall season.",
    user_id: 1,
    concept_id: 1
  },
  {
    comment: "The 'Elegance in Grain' project demonstrates a strong vision for crafting a walnut coffee table that celebrates the beauty of the wood. The design concept's focus on simplicity and clean lines allows the natural characteristics of the walnut to take center stage. To further enhance the project, consider exploring unique design elements or incorporating subtle decorative accents that accentuate the table's elegance. Additionally, paying close attention to the finishing process will ensure the walnut's grain patterns and tones are truly brought to life. The final presentation of the coffee table, along with its functional aspect, promises to create a captivating centerpiece that seamlessly blends sophistication and organic beauty. With meticulous execution and a keen eye for detail, the 'Elegance in Grain' walnut coffee table has the potential to become a striking and timeless piece that will be cherished for years to come.",
    user_id: 3,
    concept_id:2
  },
  {
    comment: "The 'Forge of Steel' welding project is a captivating endeavor that showcases the artistry and skill of metalwork. The introduction provides a glimpse into the transformative process of turning molten metal into a custom sculpture. The design concept's incorporation of organic and geometric elements is intriguing, offering a unique perspective on the blending of nature and human creativity. For someone unfamiliar with metalwork, the description of material selection and preparation helps to understand the importance of choosing high-quality steel and the meticulous steps taken before welding. The explanation of different welding techniques sheds light on the precision and expertise required to join the metal components seamlessly. The attention to finishing and surface treatment highlights the commitment to both aesthetics and durability. Overall, the 'Forge of Steel' project promises to deliver a visually captivating and thought-provoking sculpture that showcases the welder's artistic vision and technical proficiency.",
    user_id: 5,
    concept_id:3
  },
  {
    comment: "The proposed 'Streamlined Inventory Management System' project sounds promising, but it's worth exploring programming languages other than BASIC to maximize its potential. While BASIC has its historical significance, it may not provide the necessary tools and scalability required for modern inventory management systems. Languages like Python, Ruby, or C# offer a wealth of frameworks, libraries, and APIs specifically tailored for such applications. These languages empower developers to build feature-rich systems with advanced functionalities, intuitive user interfaces, and seamless integrations. By adopting a more modern programming language, you can enhance the usability, flexibility, and overall performance of your inventory management system, ensuring it meets contemporary needs and remains competitive in the market.",
    user_id: 5,
    concept_id:4
  },
  {
    comment: `As someone who has primarily worked with BASIC programming as a hobbyist, I find the "Predictive Insight" project incredibly fascinating. The utilization of advanced machine learning techniques to analyze customer churn is an exciting step towards leveraging data for business insights. The description highlights the importance of data collection, preparation, and feature engineering, which are crucial steps in building accurate predictive models.

    Although my experience lies predominantly in BASIC programming, I appreciate the project's emphasis on using advanced algorithms and evaluation metrics to train and evaluate the models. The integration and deployment aspects, especially the real-time data processing and CRM integration, showcase the practical application of the project's outcomes.
    
    The potential business insights and actionable strategies derived from the developed model demonstrate how data-driven decisions can lead to enhanced customer retention and loyalty. Overall, "Predictive Insight" presents an exciting opportunity to expand my skills and delve into the realm of machine learning, opening new possibilities for my future projects.`,
    user_id: 4,
    concept_id:5
  },
   {
    comment: `The "Elegance in Grain" walnut coffee table project in person but can only imagine its beauty based on the description, I must say it sounds absolutely captivating. The combination of walnut wood and fine woodworking craftsmanship creates an image of a truly remarkable piece.

    The design concept, with its clean lines, sleek silhouette, and emphasis on the natural features of the wood, promises a visually striking table that exudes elegance. The carefully selected high-quality walnut slab, with its mesmerizing grain patterns, adds a touch of uniqueness and character to the piece.
    
    The construction techniques mentioned, such as the precise woodworking and the use of mortise-and-tenon joinery, suggest a table that is not only aesthetically pleasing but also built to be sturdy and long-lasting.
    
    The finishing details, including the hand-rubbed oil finish and the delicate hand-sanding, further enhance the walnut's natural beauty, creating a smooth and inviting surface.
    
    Although I can only envision the final result, I imagine the "Elegance in Grain" walnut coffee table as a centerpiece that demands attention in any living space. Its graceful lines, rich tones, and refined details would undoubtedly make it a standout piece, both visually striking and functional.
    
    In conclusion, based on the given description, the proposed "Elegance in Grain" walnut coffee table project seems to embody the artistry and craftsmanship of fine woodworking. It promises to be a timeless piece that brings sophistication and warmth to any environment, and I can only imagine the joy it would bring to those fortunate enough to have it in their home.`,
    user_id: 2,
    concept_id:1
  },
 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
