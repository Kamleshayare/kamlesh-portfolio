export type WritingBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: { text: string; href?: string }[] };

export type WritingEntry = {
  slug: string;
  title: string;
  date?: string;
  minutes: number;
  dek?: string;
  body: WritingBlock[];
};

export const writing: WritingEntry[] = [
  {
    slug: "fear-and-confidence",
    title: "Fear & Confidence",
    minutes: 4,
    dek: "On the paradox of two emotions that seem opposed but often show up together.",
    body: [
      {
        type: "p",
        text: "In the pursuit of our goals, we sometimes find ourselves caught in the paradox of fear and confidence. These two emotions, seemingly at odds with each other, can either hinder our progress or propel us forward.",
      },
      {
        type: "p",
        text: "The world of entrepreneurship is a fertile ground for the interplay of fear and confidence. Venturing into the unknown, taking risks, and betting on our own ideas can be a terrifying prospect. The fear of failure, instability, can be paralyzing. Yet, it is precisely in this space that our true potential lies.",
      },
      {
        type: "p",
        text: "Failures and setbacks are an inevitable part of any journey. They've knocked me down more times than I'd like to admit, casting long shadows of doubt and fear. They have the power to instill fear and doubt within us, threatening to derail our progress. However, it is also in these moments that our true character is tested.",
      },
      {
        type: "p",
        text: "Sometimes, things just don't work out, and that's okay. I've had my fair share of missteps and blunders, moments when things went south, and honestly, there wasn't always a deep lesson to unearth. But here's the twist – I started to see that there's value in that, too. Letting go of the need to extract wisdom from every single mishap freed me. It allowed me to experience setbacks as just parts of the journey, not devastating roadblocks or must-find lessons. It's about recognizing that while not every failure has a direct lesson, each one is still a step forward, a part of the process. By accepting this, I've found a different kind of progress – in acceptance, resilience, and the simple act of moving forward without overanalyzing every stumble.",
      },
      {
        type: "quote",
        text: 'A message from my favourite pair of socks – on the other side of fear lies growth, and sometimes, all it takes to embark on that journey is a hearty, unwavering "why the fuck not?"',
      },
      {
        type: "p",
        text: "Fear and confidence may seem like opposing emotions, but it is possible to experience both simultaneously. The key to managing this paradox lies in focusing on the things you can control and being objective with yourself about how you can take action to achieve your goals.",
      },
      {
        type: "p",
        text: "When it comes to fear, it's important to acknowledge that it is a natural response to the unknown and the possibility of failure. Instead of letting fear paralyze you, use it as a motivator to push yourself forward. Recognize that fear is a normal part of the journey and that it can actually fuel your determination.",
      },
      {
        type: "p",
        text: "At the same time, you cultivate confidence by reflecting on your past successes. Each achievement is proof that you have the skills and strength to overcome obstacles and achieve your goals.",
      },
      {
        type: "p",
        text: "Remember, fear and confidence are not mutually exclusive. Confidence isn't about being fearless or getting it right all the time. It's about showing up, even when the doubt is loud, and your legs are shaking. Embrace the paradox, use fear as a motivator, and may your confidence guide you to success.",
      },
    ],
  },
  {
    slug: "creativity",
    title: "Creativity",
    minutes: 4,
    dek: "As AI takes over more creative domains, does human creativity become more valuable or redundant?",
    body: [
      {
        type: "p",
        text: "As we stand on the threshold of the fourth industrial revolution—where digital, biological, and physical innovations are merging—I've come to question something fundamental: in a world where AI creates for us, does human creativity become more valuable or redundant?",
      },
      {
        type: "p",
        text: "For years, I believed our capacity for innovation, problem-solving, and imagination would remain uniquely human. But now, as I watch AI take over more creative domains, I'm not so sure. Is human creativity still essential? Or is it a relic of the analog past, clinging to relevance in a world where machines can now rival and even surpass us?",
      },
      {
        type: "p",
        text: "To answer these questions, we must reconsider what creativity means to us as humans. Creativity is more than just a tool for problem-solving or world-building; it's woven into the very fabric of human existence. Throughout history, we've engaged in acts of creation not only for practical outcomes but because they hold deeper personal meaning. Whether we're painting a picture, writing a poem, or simply rethinking how we live, creativity is about more than producing something new—it's about discovering something within ourselves.",
      },
      {
        type: "p",
        text: "In many Eastern philosophical traditions, creativity is conceptualized differently from the Western notion of individual genius. In Taoism and certain schools of Buddhism, creativity is often seen as a process of aligning oneself with the natural flow of the universe rather than imposing one's will upon it. This perspective might view AI as simply another manifestation of this universal creative force.",
      },
      {
        type: "p",
        text: "Even if AI takes over the practical side of innovation, our creative pursuits will continue to serve a purpose, though not in the same way. The value of creativity may shift from shaping the world externally to shaping our internal world. It helps us process our experiences, connect with others, and make sense of our lives. It is a way of exploring who we are, regardless of what we produce or whether the world needs it.",
      },
      {
        type: "p",
        text: "What AI lacks—and what we must not forget—is that creation, for humans, is an experience. While AI generates outputs, humans live through the process of creating. We struggle with ideas, face failures, and take detours that reveal new possibilities. Creativity for us is not a straight line; it's a journey shaped by emotion, memory, and personal growth.",
      },
      {
        type: "p",
        text: "Beyond self-expression, creativity also allows us to connect with others. Human creativity has always been relational; it is a way we share our experiences, question assumptions, and build bridges. We create to be seen, to be heard, and to make sense of our collective existence. Even in a future where AI might excel at producing art, music, or literature, our human creations will still carry a weight of personal and cultural significance that machines cannot replicate.",
      },
      {
        type: "p",
        text: "AI may produce works of beauty, but it will never feel that beauty. It may generate narratives, but it won't know what it's like to live those stories. Human creativity is bound to our experiences, our shared histories, and our unique ways of seeing the world. This makes it irreplaceable, not because it's superior, but because it's deeply and uniquely human.",
      },
      {
        type: "p",
        text: "Creativity will continue to be the way we find meaning in our experiences, connect with others, and define our place in the world, even if that world is increasingly built by machines. In this new era, human creativity doesn't lose its value—it finds a new, profound purpose in our quest for self-understanding and connection.",
      },
    ],
  },
  {
    slug: "embeddings",
    title: "Embeddings",
    minutes: 9,
    dek: "A tour through how machines translate words, sentences and images into vectors — and how GPT-style token embeddings work.",
    body: [
      {
        type: "p",
        text: "Embeddings are a cornerstone in the world of machine learning, transforming the way machines interpret and process complex data. At their core, embeddings are numerical representations of information — such as words, sentences, or images — mapped into a continuous vector space. In other words, they translate data into a language that machines can understand and process efficiently.",
      },
      { type: "h2", text: "Early Foundations" },
      {
        type: "p",
        text: "The concept of embeddings originated from earlier works in dimensionality reduction and feature learning. Techniques like Principal Component Analysis and Multi-Dimensional Scaling laid the groundwork by demonstrating how high-dimensional data could be effectively represented in lower-dimensional spaces. Neural networks contributed to the foundational ideas as well, especially through the development of autoencoders, which learned compressed representations of input data.",
      },
      { type: "h2", text: "Word embeddings" },
      {
        type: "p",
        text: "The idea of word embeddings became prominent with algorithms like Latent Semantic Analysis and Latent Dirichlet Allocation, which aimed to capture semantic relationships in text. The real breakthrough came with the introduction of Word2Vec by Mikolov et al. in 2013. This approach significantly advanced the field by efficiently learning word representations in vector space, capturing semantic meanings based on context.",
      },
      {
        type: "p",
        text: "To fully grasp how embeddings work, we must understand how it's defined mathematically, followed by how they are computed, and the various operations we can perform to utilize them. I will start with a broad definition of embeddings before talking specifically about token embeddings and how models like GPT-3 create and process them.",
      },
      { type: "h2", text: "Vectors" },
      {
        type: "p",
        text: "A vector is simply a sequence of numbers. For instance, in a 2D space, a vector like [2,3] signifies a movement of 2 steps horizontally and 3 steps vertically. They could be used to represent a position in a space relative to its various dimensions.",
      },
      {
        type: "p",
        text: "The number of elements in a vector determines its dimension. Therefore, a 2D vector contains two numbers, a 3D vector has three, and so forth, defining the vector's complexity and the information it can represent. When it comes to natural language processing, embeddings capture not just the standalone meaning of words but also their context.",
      },
      {
        type: "p",
        text: "In the context of machine learning, each dimension in a vector space captures some aspect of the object's features or context. High dimensionality allows the model to capture and process a vast range of features in the data. It's key to the model's ability to understand and generate nuanced and contextually appropriate outputs.",
      },
      {
        type: "p",
        text: "The number of dimensions are defined by the design of the model, for example GPT-3's, like other transformer-based models, processes input through a series of layers, each comprising multi-headed self-attention and feedforward neural networks. Its largest variant (175B), has a hidden layer size of 12,288, which means each token is represented in a 12,288-dimensional space.",
      },
      {
        type: "quote",
        text: "Language Models are Few-Shot Learners",
        cite: "2020 — Tom B. Brown et al.",
      },
      {
        type: "p",
        text: "The layers that lead to embedding dimensions in models like GPT or other deep learning architectures are defined through a combination of model design choices and training processes. The architecture of a model can include different types of layers, each with a specific function. Common layers in deep learning models include embedding layers, convolutional layers (in CNNs), recurrent layers (in RNNs) and transformer blocks (in models like GPT).",
      },
      {
        type: "p",
        text: "These layers are designed to learn and transform data in a way that captures relevant patterns and features for the task at hand. In models like GPT, the embedding dimensions are not just initial representations but are refined through the network's layers, adding rich contextual information.",
      },
      { type: "h2", text: "Token embeddings" },
      {
        type: "p",
        text: "There are various types of embeddings used to represent different types of data. For the sake of simplicity, I'll only be talking about token embeddings– which are a little non-traditional in the sense that they capture semantic and syntactic properties. So instead of creating embeddings that represent words in a space, tokens can be words, parts of words, or even punctuations, depending on the exact implementation.",
      },
      { type: "h2", text: "Combined Embeddings" },
      {
        type: "p",
        text: "Unlike traditional word embeddings that represent a word in isolation, GPT's token embeddings are context-aware. The representation of a token is influenced by the tokens around it. Since GPT is designed to generate text sequentially, it incorporates positional embeddings. These embeddings give the model information about the order of tokens in the sequence. The final representation of a token in GPT is a combination of its token embedding and its positional embedding. This combined embedding is then processed through the model's layers.",
      },
      {
        type: "p",
        text: "In the case of token embeddings used by models like GPT-3, the ability to understand the context in which a word or phrase is used allows the model to generate more accurate and contextually appropriate responses.",
      },
      {
        type: "p",
        text: "An interesting aspect of embeddings in machine learning is their evolution during the training process. Initially, embeddings are set to random values. This randomness is key to starting the learning process, as it provides a diverse range of starting points for the model's optimization algorithms. During training, as the model is exposed to data and learns from its tasks (like predicting the next word in a sentence for language models), these embeddings are continuously adjusted.",
      },
      {
        type: "p",
        text: "The adjustments are made to minimize the difference between the model's predictions and the actual outcomes. Through this iterative process, the embeddings slowly evolve from their random initialization to a state where they meaningfully represent the underlying features of the data. For instance, in language models, word or token embeddings start to capture semantic and syntactic properties of the language, enabling the model to understand and generate text with high coherence and relevance.",
      },
      {
        type: "p",
        text: "You can perform various operations on vectors that help do things like extract information from and perform comparisons using embeddings. For example, cosine similarity measures how similar two embeddings are, irrespective of their magnitude. This operation is crucial in tasks like document clustering or finding words that share semantic meanings. Operations unlocks different capabilities of embeddings. They are the tools that allow us to extract meaning, see patterns, and make predictions using embeddings.",
      },
      {
        type: "p",
        text: 'In natural language processing, for example, adding or subtracting word embeddings can lead to intuitive results — like the famous example of "king" - "man" + "woman" resulting in a vector close to "queen". This showcases the embeddings\' ability to capture and manipulate linguistic relationships.',
      },
      { type: "h2", text: "Evolution of techniques" },
      {
        type: "p",
        text: "The journey of token embeddings from simple to complex mirrors the evolution of our understanding of language in the digital world. Starting off, we had methods like One-Hot Encoding and TF-IDF. Picture One-Hot Encoding as giving each word its unique, but excessively large, digital fingerprint, and TF-IDF as a smarter cousin that knows which words matter more in a document.",
      },
      {
        type: "p",
        text: "Both were like novices in a world of poetry and prose – they knew words but missed the music in them.",
      },
      {
        type: "p",
        text: "The arrival of Word2Vec, GloVe, and FastText marked a notable shift. Word2Vec began to map words into a space where similar meanings were closer together, a bit like plotting words on a map based on their relationships. GloVe added depth by combining broader language patterns with specific word contexts. FastText brought an additional layer, deconstructing words into smaller fragments, which was especially useful for understanding less common words. These models were a big step forward, yet they still struggled with the challenge of words that change meaning based on context.",
      },
      {
        type: "p",
        text: "The latest advancements, led by transformer models like BERT, ELMo, and GPT, have brought a new level of sophistication. These models don't just look at words in isolation; they consider the whole sentence or paragraph, allowing them to grasp the nuances of language. They're like context detectives, examining not just the word but its surroundings to understand its role and meaning. This approach has significantly improved how machines interpret text, though it comes with its own complexities, including the need for substantial computational resources and intricate training.",
      },
      {
        type: "p",
        text: "This evolution from static to dynamic, context-sensitive embeddings is a significant step towards machines that can truly understand the subtlety and richness of human language.",
      },
      {
        type: "list",
        items: [
          { text: "Efficient Estimation of Word Representations in Vector Space — 2013, Mikolov, T.; Chen, K.; Corrado, G.; Dean, J." },
          { text: "GloVe (Global Vectors for Word Representation) — 2014, Pennington, J.; Socher, R.; Manning, C.D." },
          { text: "Enriching Word Vectors with Subword Information — 2016, Bojanowski, P.; Grave, E.; Joulin, A.; Mikolov, T." },
          { text: "Deep Contextualized Word Representations — 2018, Peters, M.E.; Neumann, M.; Iyyer, M.; Gardner, M.; Clark, C.; Lee, K.; Zettlemoyer, L." },
          { text: "Attention Is All You Need — 2017, Vaswani, A.; Shazeer, N.; Parmar, N.; Uszkoreit, J.; Jones, L.; Gomez, A.N.; Kaiser, Ł.; Polosukhin, I." },
        ],
      },
      {
        type: "p",
        text: "As we delve deeper into the intricacies of machine learning and natural language processing, the significance of embeddings becomes even more pronounced. These embeddings are not just static representations; they are dynamic entities that evolve and adapt, capturing the nuanced and multifaceted nature of language and other forms of data.",
      },
      {
        type: "p",
        text: "The transformative power of embeddings extends beyond mere word associations. They enable machines to grasp the subtleties of context, sentiment, and even cultural nuances, paving the way for more advanced, empathetic, and intuitive AI systems. With embeddings, we're not just teaching machines to understand words; we're guiding them towards a deeper comprehension of human communication in all its complexity.",
      },
      {
        type: "p",
        text: "As we refine these techniques, we edge closer to a world where AI can seamlessly interact with humans, providing insights and assistance in ways we're just beginning to imagine. Whether it's through enhancing natural language understanding, improving recommendation systems, or enabling more sophisticated human-computer interactions, embeddings are at the forefront of this technological revolution.",
      },
      {
        type: "p",
        text: "From simple numerical representations to sophisticated tools that capture the essence of human language and thought, embeddings are not just a cornerstone of AI– they are a gateway to a future where the lines between human and machine intelligence become increasingly blurred. As we continue to explore and innovate in this domain, the possibilities are as limitless as they are exciting.",
      },
    ],
  },
  {
    slug: "humans-will-always-do-more-than-survive",
    title: "Humans will always do more than survive",
    minutes: 2,
    body: [
      {
        type: "p",
        text: "Though our lives are different, the time period in which we live, the technological age, is one of those landmark periods that will become a part of the history of humankind. Each of us might only live through a few of these breakthrough moments, but we all share the journey toward discovery and meaning.",
      },
      {
        type: "p",
        text: "The future is to be full of technological advances we can only dream of today. We're to colonize other planets and build robots that act like people, as well as create virtual realities and harvest unlimited energy. As far as I know, I'm not going to live long enough to see what life is like on a planet other than Earth, or maybe I will, it all depends on whether or not we discover anything in space—and how soon we get there—but I'd never say thinking about these things or trying to achieve any of it is a waste of our time.",
      },
      {
        type: "p",
        text: "The inner spirit that drives us might be a mystery to even to us, but it's the very definition of what makes us human. The sun might someday explode and kill us all, but until then, we build things, discover new places, create and communicate—we put on costumes and sing, dance and play. We do more than just survive, we discover what life has to offer along the way.",
      },
      {
        type: "p",
        text: "Looking at life from a distance, it's hard not to smile.",
      },
    ],
  },
  {
    slug: "growth",
    title: "Growth",
    minutes: 2,
    body: [
      {
        type: "p",
        text: "You chose growth because you want to expand beyond your current capabilities. It's easy to settle for what you already have, but you're forcing yourself to grow whether you like it or not.",
      },
      {
        type: "p",
        text: "If you're on this journey, it's because you want more than what you have now. That's why you have all these questions, and why you're forcing yourself to grow. It doesn't have to be comfortable - but that's okay because you've already decided that more is worth it.",
      },
      {
        type: "p",
        text: "When you're trying to grow, you have to try a bunch of different things. It's like a pendulum—you swing from what you are now to what you want to be.",
      },
      {
        type: "p",
        text: "At first, everything feels uncomfortable because it's not natural yet—you're still not used to operating that way. You have to think about it actively and you keep swinging back and forth. But don't worry, that feeling goes away once you get used to it. And by the time you do, the pendulum will naturally settle in the middle and it'll be much easier for you to pull from both sides of who you are—the current you and the past you. Just give it time and appreciate the progress you make along the way.",
      },
      {
        type: "p",
        text: "We force ourselves to feel disordered so we can learn that there are better ways of living. There may be an inherent chaos to this process, but if you look closely enough, you can see that it's also remarkably beautiful and worth preserving.",
      },
    ],
  },
  {
    slug: "exploring-ideas-with-gpt-3",
    title: "Exploring ideas with GPT-3",
    minutes: 5,
    dek: "A newsletter issue: playing with GPT-3, a case against the word 'interesting', and notes from around the internet.",
    body: [
      {
        type: "p",
        text: "While it's not perfect, I've been struck by the connections GPT-3 draws between words and ideas in almost every domain. It's a new way to have a conversation of sorts with a computer, and get a peek into how an AI understands patterns in the world.",
      },
      {
        type: "p",
        text: "When I asked GPT-3 (Q&A preset) to explain 'unorthodoxed design' here're some of its responses:",
      },
      {
        type: "quote",
        text: "Design is fundamentally about creating ideas that innovate in the spirit of wild dreams.",
      },
      {
        type: "quote",
        text: "It's usually smarter to start with the obvious idea and then work your way around to something new and uncommon.",
      },
      {
        type: "p",
        text: "I highly recommend trying out the @openai playground, it's free, publicly available now, and easy to play with. You can get free access at: openai.com/api",
      },
      {
        type: "p",
        text: 'I ran the top half of my essay, Humans will always do more than survive, through GPT-3 and tried to get it to write me an alternate conclusion; here\'s what I got.',
      },
      {
        type: "quote",
        text: "We have a tendency to overcomplicate things, but the truth is that dance, music, art and theater are all ways for us to escape from reality, and enjoy ourselves in the process. I hope that people never become so advanced or obsessed with their advancements that they forget why they got here in the first place...so we can all go out and dance until the sun comes up.",
        cite: "🤖 GPT-3",
      },
      {
        type: "p",
        text: "One other paragraph in this newsletter (outside this section) was written by GPT-3, can you guess which?",
      },
      { type: "h2", text: "Why you should stop using the word 'interesting'" },
      {
        type: "p",
        text: "It's a diplomatic word, used when there's no other word available. A substitute for thinking. It means nothing. Because the word 'interesting' doesn't say anything about what's interesting. It's the verbal equivalent to a shoulder shrug, and it usually means either that a speaker doesn't have anything substantive to say, or that they just aren't saying anything at all. Why are you 'interested' in something? Does it mean that you want to know more? Or does it mean that you already know what's going on, but you think it might be fun to look at anyway?",
      },
      {
        type: "p",
        text: "In place of the word 'interesting', say why you think it is interesting instead.",
      },
      { type: "h2", text: "Speaking of Futureland" },
      {
        type: "p",
        text: "I want to share the various tools, mental models and ideas I come across that are valuable in some way. Sometimes these could get a little nerdy, but I mean well.",
      },
      {
        type: "p",
        text: "Futureland has been one of the most delightful pieces of software & community combinations I've come across this year. It's quickly become one of my favourite apps. Try for yourself at futureland.tv.",
      },
      { type: "h2", text: "From the archive" },
      {
        type: "p",
        text: "An excerpt from Polymath Letters - 05/07/2020",
      },
      {
        type: "quote",
        text: "Even when the human is about to die, his illusions, mind, hopes, and opinions don't die. One patient was afraid of the pain to come, and one patient was happy remembering his good old times -- both are entangled in the games of the mind. Even in the last moments of our life, the mind doesn't let us just live; it keeps us busy in its games. The past and the future, both are not real; they exist only inside your head. The only moment that truly exists is the one you are living right now. In remembering the past and imagining the future, the present moment passes by.",
      },
      {
        type: "p",
        text: "Reading: Good to Great – A management book on transitioning from good to great companies. 1/ Finding your Hedgehog concept and why great companies have one 2/ Put the best people on the biggest opportunities, not the biggest problems. 3/ Confront brutal facts head-on.",
      },
      {
        type: "p",
        text: "Watching: How Airlines Quietly Became Banks — each airline runs its own loyalty program as a separate company, and these programs consistently bring in billions more than the airlines themselves. Also, The Art of Code, a talk by Dylan Beattie: there's the code that makes our banks and hospitals, as well as the code we use to browse the web and create spreadsheets. And then there's code that just exists because somebody wanted to write it. Maybe it solves a problem. Or maybe it doesn't do anything at all, some software comes into being just because somebody wanted to write it and make their friends smile, laugh, or dance.",
      },
    ],
  },
  {
    slug: "introduction-to-genetic-algorithms",
    title: "Introduction to Genetic Algorithms",
    minutes: 3,
    dek: "How a chance conversation about evolving strings of text turned into a years-long fascination.",
    body: [
      {
        type: "p",
        text: "Many years ago, when I was about fourteen, I was introduced to a computer science graduate student in Sri Lanka. I got to know him at a photoshoot for a magazine that we were publishing at the time. I was there to figure out what photos we needed, and he took the photos. It was his hobby. After we were done, I saw him sitting on the floor, with his laptop on a step, waiting for some code to finish running. Obviously, I was curious and asked him about it.",
      },
      {
        type: "p",
        text: "Genetic algorithms use random exploration of the problem space combined with evolutionary processes like mutations and crossovers (exchange of genetic information) to improve guesses. But also, because they have no experience in the problem domain, they could try things a human would never think to try.",
      },
      {
        type: "p",
        text: 'The idea of using basic principles of Darwinian evolution to write code that can solve problems through evolutions blew me away. It fascinates me to this day.',
      },
      {
        type: "p",
        text: 'As young and naive as I was at the time, his explanation of using the biological principles of crossovers and mutations to write algorithms that can "evolve" a dataset (aka population) into a solution, instantly resonated with me. At the time, I had a rudimentary understanding of evolution, mostly based off exercises on cross-pollinating pea plants to breed different kinds of peas. Six years later, some residual effect of that moment lead me to study Bioinformatics; a field at the intersection of genetics and computer science.',
      },
      {
        type: "p",
        text: 'It\'s been almost a year since I\'ve done any serious work in the field. I hope this is the start of changing that. My love for this space was rekindled when I came across a rudimentary project that implemented the "Hello world" equivalent of a genetic algorithm. It simply used a random population of strings and "evolved" them until it got to the word "Hello world". What a cool fu*king way to illustrate how genetic algorithms work. That project is almost 10 years old, I\'m going to revamp it. Hopefully the result will be a small, versatile framework that I or anyone else can extend on.',
      },
      {
        type: "p",
        text: "My favourite thing about this example is that it is seemingly very simply at the surface, making it very easy to understand. However, as you learn more about genetic algorithms you can easily incorporate things like complex mutations and more variables.",
      },
      {
        type: "p",
        text: "If I could instil a sliver of curiosity in just one person reading this post, this would've been entirely worth its while. For the rest of this post, which is a tutorial, I'm going to assume little prior knowledge in genetics and programming.",
      },
      {
        type: "p",
        text: "The rest of this tutorial is hosted on GitHub, along with source code and notes.",
      },
    ],
  },
  {
    slug: "how-we-sense-reality",
    title: "How we sense reality",
    minutes: 9,
    dek: "From muscle spindle receptors to phantom limbs and illusory triangles — notes on how the brain constructs a sense of self and space.",
    body: [
      {
        type: "p",
        text: "Have you ever taken a moment to actually think about what goes on inside your head to process the feeling of your physical-self at this present moment in time? — the mild weight of air on your skin or knowing the exact orientation of each of your limbs, eyes and head without really having to think about it?",
      },
      {
        type: "p",
        text: "It's easy to fall under the delusion that the tasks of simply feeling things such as the orientation of your body are too ordinary to ever worth mentioning; but the fact is, even these minimal tasks take up tremendous amounts of computational power within our brains to process — and it's the very reason it makes this one of the most interesting topics to explore as a science enthusiast! Let's begin with the 'sensors'.",
      },
      { type: "h2", text: "The Sensors" },
      {
        type: "p",
        text: "Our mind constructs its sense of space using a combination of senses which includes vision, hearing, touch, body position, balance and movement. This is an extremely complex process which engages all our senses coherently to give us a clear-cut sense of our physical-self and surrounding environment. This understanding includes a continuous feed of your complete orientation (body positioning), a sense of all the objects within the given environment and other factors such as temperature, sounds and etc.",
      },
      {
        type: "p",
        text: "It's impossible to talk about all theses senses in-depth through a single post. For the sake of keeping this article interesting and open to readers from any background I'll only be covering the topic of sensing body positioning.",
      },
      {
        type: "p",
        text: "There are two types of sensors involved with measuring the positioning of our body, or to be more specific — the positioning of muscles. Namely they are the Golgi Tendon Organs and Muscle Spindle Receptors whose combined signals allow the brain to accurately perceive the bodies configuration.",
      },
      {
        type: "p",
        text: "The Golgi Tendon Organs measure the load the muscles are carrying and are located in the junction between the muscle and tendon, while Muscle Spindle Receptors are located within the muscles and are present to measure the length of the muscles.",
      },
      {
        type: "p",
        text: "Forget the complex terms and sensors — the wow factor here is the amount of information our brains compute every millisecond you're alive to simply be aware of your current physical-orientation. And this process happens even when you're doing absolutely nothing! Ain't that amazing?",
      },
      {
        type: "p",
        text: "That was just body positioning, and it's like shooting fish in a barrel compared to what the brain has to go though in order to process inputs from other senses such as vision and hearing. Now imagine all these inputs being processed simultaneously to give you a unified sense of your body and it's surrounding space!",
      },
      {
        type: "p",
        text: "Vibratory Myesthetic Illusion — this is an illusion which occurs when vibrations are applied to muscles. For example when a vibration is applied to the biceps muscle of your arm, it creates the illusion that the arm is actually moving (try it!); it stimulates the stretching of muscles which usually occur only when the muscles are actually moving. This illusion requires that the participant is blindfolded, because vision has the ability to override the sense of your body position from these receptors. Now try this with the person holding the tip of his/her nose while vibrations are applied to the biceps. Most subjects usually say that they felt as though their nose was extending (yes, just like Pinocchio!) as they felt their arm extending outwards.",
      },
      { type: "h2", text: "The Electrical Signals" },
      {
        type: "p",
        text: "The creation of an electrical signal from a mechanical force in a neuron occurs though a process called mechanotransduction — it's the mechanisms by which cells convert mechanical stimulus into chemical activity, which then leads to the creation of an action potential; or the so called 'firing' of a neuron.",
      },
      {
        type: "p",
        text: "This action potential is a result of a cascade of complex chemical processes triggered by an initial physical stimuli. We don't know exactly how the Golgo Tendon Organs or Muscle Spindle Fibers activates this process; perhaps the mechanical force directly opens ion channels or it may operate on a protein molecule which changes it's shape to set in motion a biochemical chain of events leading to the generation of the signal.",
      },
      {
        type: "p",
        text: "As mentioned before the action potential is the so called 'firing' of the neuron, and is a result of a cascade of processes which lead to the voltage within the neurons spiking from -70mV (resting state/potential) to about +40mV.",
      },
      {
        type: "p",
        text: "The process is started off by the opening of sodium ion channels — which causes sodium ions to pour into the neuron; creating a positive electrical potential. The process results in a positive feedback loop, causing more and more sodium ion channels to open until the voltage finally reaches +40mV.",
      },
      {
        type: "p",
        text: "The important and interesting piece of information we need to gather from this is the fact that neurons don't transmit information based on the voltage or 'shape' of the action potentials, but instead it's based on the frequency of action potentials fired. This also means that each an every action potential is always identical; regardless of the information it's transmitting.",
      },
      { type: "h2", text: "The Brain" },
      {
        type: "p",
        text: "The senses from all parts of our body are mapped onto specific parts of our brain — this is called a somatotopic map. This was studied extensively by Canadian neurologist Wilder Penfield who, when he opened up the skulls of his patients for brain surgery would sometimes apply a small electrical jolt to different parts of the brain and ask the patients (while still conscious) if they felt anything — this lead to him mapping out these various senses on the brain, eventually leading to a surreal portrait of the human body stretched out across the surface of the brain.",
      },
      { type: "h2", text: "The Phantom Limb Phenomenon" },
      {
        type: "p",
        text: "The aforementioned mapping of neurons in the brain results in the possibility for an interesting phenomenon referred to as the phantom limb syndrome. In layman's terms it's where amputees sometimes start feeling sensations (usually pain) from a missing limb.",
      },
      {
        type: "p",
        text: "When a limb is amputated from a patient the region of the brain mapped to the given limb stops receiving neural signals, you can go as far as to say this region gets rather 'hungry' for nervous stimuli and can result in signals from neighboring regions mapped to different parts of the body flowing into and taking over this vacant region of the brain — causing feelings to be felt as though they were coming from the missing limb. It is important to note that only 5 to 10% of individuals with an amputation experience this phantom sensation.",
      },
      { type: "h2", text: "Now back to the brain… and eyes" },
      {
        type: "p",
        text: "Let's talk about how the brain processes certain images. Specifically how our brain interprets visual signals and sometimes manage to fill in the gaps.",
      },
      {
        type: "p",
        text: "The brain doesn't simply process visual information; it actively tries to interpret it in the visual cortex and at times, fill in the gaps — which is why illusory contours, like a triangle implied by three notched circles, can appear even when no triangle is actually drawn.",
      },
      {
        type: "quote",
        text: "The brain abhors a vacuum. [It] fills in information that was not there.",
        cite: "Scott Fraser",
      },
      {
        type: "p",
        text: "The detailed theories of how this may happen is quite interesting. But to make sense of it all we need to know a bit about how our eyes sense light.",
      },
      {
        type: "p",
        text: "The backs of our eyes (retina) are lined with light-sensitive cells known as photoreceptors. Each of these photoreceptors have a specific receptive field. Which means that a single photoreceptor always reads light from a specific part of the scene — this results in the formation of a map (think of it like a projection) of the visual scene at the back of the retina, which is inherited and mapped in the exact same manner onto the visual cortex of the brain — which is where your vision is processed. This is called a retinotopic map and it's one of the main reasons we understand and sensibly process visual scenes.",
      },
      {
        type: "p",
        text: "Now to explain those illusory contours. The crux of what happens here is that the brain sees the contours of a triangle on the black circles and fills in the gaps; forming an illusory triangle. One of the theories suggest that, when the neurons at two of the circles are fired it also causes neurons with similar orientation in between them to fire partially — resulting in us forming the illusory contours of a triangle. A similar process occurs when you try the blind spot illusion.",
      },
      {
        type: "p",
        text: "I recently took the course on The Brain and Space by Dr. Jennifer M. Groh, Ph.D. and it was truly the most interesting program I've invested my time in researching and learning how our brain really processes things. Consider the above article my notes on the subject and a quick summary of some of the most interesting topics I have come across.",
      },
      {
        type: "list",
        items: [
          { text: "sciencedirect.com — Mechanotransduction in the muscle spindle", href: "http://www.sciencedirect.com/science/article/pii/S153458070500482X" },
          { text: "tutis.ca — Muscle sense", href: "http://www.tutis.ca/Senses/L8Muscle/L8MuscleSense.pdf" },
          { text: "Wikipedia — Equilibrioception", href: "http://en.wikipedia.org/wiki/Equilibrioception" },
          { text: "news-medical.net — What is a Phantom Limb?", href: "http://www.news-medical.net/health/What-is-a-Phantom-Limb.aspx" },
          { text: "Penfield's homunculus", href: "http://zineblascience.blogspot.com/2014/02/penfields-homunculo.html" },
          { text: "ru.nl — The brain fills the gaps", href: "http://www.ru.nl/english/@943986/brain-fills-gaps/" },
        ],
      },
    ],
  },
];
