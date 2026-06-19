const examData = {
  title: "C1 Advanced Digital Mock Exam",
  subtitle: "Test 3",
  papers: [
    {
      id: "reading",
      title: "Reading and Use of English",
      duration: 90,
      parts: [
        {
          id: "r1",
          title: "Part 1",
          taskType: "multipleCloze",
          heading: "Technological gadgets and knowledge",
          instructions: "For questions 1-8, choose the answer A, B, C or D which best fits each gap.",
          text: [
            "Does having the internet mean we never need to (0) commit anything to memory ever again?",
            "The generation who have grown up with technology hope this is the {1}, not to mention everyone else who feels the need to {2} their habitual attachment to the latest technological devices.",
            "Some educationalists fear that access to information on the internet reduces the importance of remembering facts. However, research shows that this is {3} important. When we think, we use working memory and long-term memory. {4} our long-term memory can be described as vast, our working memory is limited to very few items and is easily {5}. By transferring facts to our long-term memory we free up precious space in our working memory, enabling us to manipulate and combine those facts with new ones. {6}, memorising some things aids understanding, as it creates a framework of known facts, needed to be able to {7} what we find on the internet.",
            "Consequently, while technology may appear to {8} the necessity to remember facts, unfortunately, the world we live in is far more complex."
          ],
          questions: [
            q(1, "choice", ["case", "issue", "matter", "instance"]),
            q(2, "choice", ["confirm", "approve", "assert", "justify"]),
            q(3, "choice", ["vitally", "completely", "largely", "totally"]),
            q(4, "choice", ["Although", "Despite", "Owing", "Since"]),
            q(5, "choice", ["overrated", "overloaded", "overdone", "overrun"]),
            q(6, "choice", ["Nevertheless", "Thereby", "Therefore", "Provided"]),
            q(7, "choice", ["obtain", "consume", "digest", "acquire"]),
            q(8, "choice", ["cancel", "remove", "delete", "take"])
          ]
        },
        {
          id: "r2",
          title: "Part 2",
          taskType: "openCloze",
          heading: "Beekeeping at school",
          instructions: "For questions 9-16, read the text and type the word which best fits each gap. Use only one word in each gap.",
          text: [
            "When a swarm of bees descended on a primary school one day, (0) NOT surprisingly there was panic among the teachers. {9}, most of the children watched fascinated as a bee catcher rounded {10} the uninvited visitors. This unexpected event led to the school getting its own bee hive a year later and integrating beekeeping into the curriculum, all of {11} has resulted in notable benefits.",
            "The children study the dance that the bees do to communicate where nectar {12} to be found and use honey in cooking lessons. They have even opened a school shop selling honey, with the pupils responsible for collecting and pricing it, as well as every other step of production.",
            "Interestingly, nobody anticipated the most significant benefit of {13} of this: the effect bees seem to {14} had on the pupils’ behaviour. {15} getting children to think of their responsibility to others can often {16} a challenge, making bees the focus has brought about this behaviour effortlessly."
          ],
          questions: range(9, 16, "text")
        },
        {
          id: "r3",
          title: "Part 3",
          taskType: "wordFormation",
          heading: "Dance stress away",
          instructions: "For questions 17-24, use the word in capitals to form a word that fits the gap.",
          text: [
            "Often considered the domain of just a few, ballet is (0) INCREASINGLY finding its way into our daily lives. People from all walks of life are now appreciating just how {17} ballet can be.",
            "The benefits of ballet have not gone {18}: the business world, with some companies offering ballet classes to their {19}. It may not, at first, seem to be an obvious combination, but the techniques used in classical ballet are regarded by some as the perfect antidote to a stressful working environment.",
            "In today’s corporate world, unhealthy posture resulting from being hunched over a laptop, is not uncommon. This, added to stress from dealing with tense situations, can increase the {20} of headaches and back pain. However, the {21}, fluid movements of ballet will counteract the physical {22} of office workers as they stretch and evaluate their posture.",
            "Regular ballet also has a myriad of mental benefits as its themed exercises enhance memory and co-ordination. The overall result is: a reduction in stress levels, enhanced {23}, determination and focus, not to mention a {24} improved sense of well-being."
          ],
          questions: [
            q(17, "text", null, "WORTH"),
            q(18, "text", null, "NOTICE"),
            q(19, "text", null, "EMPLOY"),
            q(20, "text", null, "FREQUENT"),
            q(21, "text", null, "GRACE"),
            q(22, "text", null, "ACTIVITY"),
            q(23, "text", null, "ACCURATE"),
            q(24, "text", null, "DRAMA")
          ]
        },
        {
          id: "r4",
          title: "Part 4",
          taskType: "transformations",
          instructions: "For questions 25-30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and six words, including the word given.",
          questions: [
            transform(25, "According to the film director, it was the quality of the photography that was most important.", "MORE", "For the film director, __________ than the quality of the photography."),
            transform(26, "The instructor told me that I would be evaluated in half an hour’s time.", "TAKE", "The instructor told me that my __________ in half an hour’s time."),
            transform(27, "Even though Sarah started badly, she went on to win the race.", "WINNING", "Sarah ended __________ of having started badly."),
            transform(28, "Hannah was surprised to be offered a pay rise by the company.", "SURPRISE", "Much __________ her a pay rise."),
            transform(29, "Harry didn’t realise how late it had got and missed his bus.", "TRACK", "Harry didn’t __________ and missed his bus."),
            transform(30, "Alec went out of his way to introduce himself to his new neighbours.", "POINT", "Alec __________ himself to his new neighbours.")
          ]
        },
        {
          id: "r5",
          title: "Part 5",
          taskType: "splitReading",
          heading: "Living in the modern world",
          instructions: "You are going to read an article about a writer called Matthew Crawford, who has just written a book about coping with modern life. For questions 31-36, choose the answer (A, B, C or D) which you think fits best according to the text.",
          text: [
            "When Matthew Crawford is not thinking and writing about how we ought to live, he works as a motorcycle mechanic. His first book was about the benefits of the manual trades. His most recent one is a kind of philosophical treatise on how to cope with modernity. He was inspired to write it when he noticed that advertisements popped up on the credit card machine during a short delay while he entered his pin number.",
            "Crawford says he realised that these demands on our attention from the advertising industry were becoming increasingly difficult to avoid. What we want to be at the forefront of our mind at any particular moment is a very personal matter, and we are being prevented from deciding this for ourselves by something which we are, in the main, unaware of. It is becoming more and more difficult to think, or spend time remembering conversations we’ve had. And because everyone is trying to protect themselves from the irritation of constantly being interrupted, we close ourselves off and no longer want to do simple things like chat to strangers. ‘We increasingly encounter the world through these representations that are addressed to us: video games, apps on your phone,’ says Crawford. They reflect our desires and end up taking over.",
            "Everyone knows that office worker who complains about emails all day and then spends their free time emailing. Studies have shown that our attention wanders if a phone is merely visible on the table. There’s no scientific evidence yet on whether our attention spans have been affected – there have been fears of this kind since the telegraph was invented in 1837. But it’s indisputable that we are more conscious of other things we might be doing. It’s tempting to see the advent of this crisis as technological, but for Crawford it’s more that the technology has created the perfect vehicles for our self-obsession. A world of constant choice means that our powers of self-control are heavily taxed, and this has a social impact.",
            "We’d rather send a text message to a friend, free from the risk of having a conversation. By only engaging with representations of people rather than people themselves, Crawford argues, we risk losing something fundamental in our society. And screens are only part of the problem. He gives his gym as an example. There used to be a single music player in the middle of the room. People didn’t all like the same music and that could lead to tension. Now people tend to listen to their own music. ‘The gym used to be a social place and it has lost that character. Genuine connection to other people tends to happen in the context of conflict’ he says.",
            "Crawford’s proposed solution has two parts. First, we need regulation of noise and distraction in public space. More importantly, though, Crawford advocates skilled practices as a way of engaging with the world in a more satisfying way. He gives the examples of an ice-hockey player and a motorbike racer as people whose roles force them to deal with material reality. No representation can replicate the feel of the hockey puck on ice, or gravel under your tyres at high speed. Each relies on their good judgment of a complicated subject and the ability to manage the presence of others in the same space.",
            "‘When you engage with the world this way, manufactured experiences are revealed as pale substitutes for the kind of involvement you have with real things,’ he says. ‘They lose some of their grip.’ It is important to find a way to use your judgment. Constantly resisting distractions can be exhausting and makes you less able to focus on what matters. The practice of paying attention to one thing, by contrast, makes it easier to pay attention to others."
          ],
          questions: [
            q(31, "choice", ["It attempts to invade every aspect of people’s lives.", "It damages people’s communication skills.", "It endeavours to distort people’s memories.", "It forces people to be mindful of their surroundings."], null, "What does Crawford suggest about the advertising industry in the second paragraph?"),
            q(32, "choice", ["Too little research has been conducted into people’s ability to concentrate.", "People’s tendency to focus too much on themselves is being facilitated.", "It is becoming increasingly difficult to distinguish between work and leisure.", "There is a lack of awareness of the impact of technology on social life."], null, "What concern is expressed in the third paragraph?"),
            q(33, "choice", ["people increasingly have disagreements.", "people are reluctant to make decisions.", "people’s instincts have changed over time.", "people no longer need to negotiate."], null, "In the fourth paragraph, Crawford regrets that"),
            q(34, "choice", ["each element of the solution Crawford proposes", "each professional Crawford mentions", "each real-life issue to be dealt with", "each sensation described"], null, "What does ‘each’ refer to in line 69?"),
            q(35, "choice", ["expanding on the merits of his approach.", "dismissing potential criticism of his ideas.", "contradicting a point made previously.", "emphasising his role in a key debate."], null, "In the final paragraph, Crawford is"),
            q(36, "choice", ["He avoids engaging in conversations with people he does not know.", "He wishes more people shared his vision of a better society.", "He admires people’s determination to resist the attractions of modern technology.", "He appreciates how hard it is for people to ignore the temptations that surround them."], null, "In the article as a whole, what is Crawford’s attitude towards other people?")
          ]
        },
        {
          id: "r6",
          title: "Part 6",
          taskType: "matching",
          heading: "Is photography art?",
          instructions: "You are going to read four extracts by academics about photography. For questions 37-40, choose from the academics A-D. The academics may be chosen more than once.",
          sections: [
            { key: "A", title: "A", text: "In my view, when a photograph is produced, this is not the result of genuinely creative camera work. A scientific technique is being applied, and with a good camera, even an amateur photographer with no artistic ability can reliably produce acceptable images. Compare this to the likelihood of someone with no idea how to paint or carve ever creating a decent watercolour or statue. Clearly, the creative quality of photography is far removed from that of such genuinely artistic endeavours. And yet there are those who persist in claiming that photography is the most significant contemporary art form. Perhaps I should qualify the extent to which I disagree: admittedly, when a photographer captures a moment of reality, it is done deliberately. It is perhaps this deliberateness that contains the germ of what might be called art." },
            { key: "B", title: "B", text: "Photography belongs both to the realms of reality and imagination: although it sometimes favours one over the other, it never quite relinquishes its hold on either. Little does it matter that a photograph can be printed out a thousand times, thus depriving the ‘original’ of its unique status. For me, it is sufficient that no two photographers are likely to create an identical image, and it is this which sets photography on a par with more established artistic disciplines such as sculpture or painting when it comes to inventiveness and originality. And now, although the idea that photography could be art at one time appeared absurd to many people, it is without a doubt our foremost and most immediately accessible means of artistic expression. In no way is it undermined by the fact that everyone has a camera these days and can take excellent photos without formal instruction." },
            { key: "C", title: "C", text: "To draw comparisons between painting and photography as art forms is to miss the point; they are so very different. Moreover, photographs capture reality, and therefore can often have a far greater impact on the viewer. There are those who insist that unlike painting, which can take years of practice to master, photography is easy: anyone can pick up a camera and take a reasonable picture. However, I would contend that it is unlikely ever to match the creativity of one taken by a professional photographer, and if it does, its success is unlikely to be replicated. These issues have been debated by art critics for over a century, and yet, arguably, photography is not only one of the newest types of art, it is the ultimate form of modern art." },
            { key: "D", title: "D", text: "There are many thousands of important early art photographs in public and private collections worldwide and yet the majority were not made with the art exhibition in mind. Some were intended as demonstrations of what the new medium could do; others began life as documents, records or illustrations; only later were they seen as art objects. The central role photography currently plays in the international artistic realm would once have been unimaginable. There are still those who judge photography not to be a true art. One reason given is that it can be duplicated again and again. I would remind them that bronze sculpture, which no-one denies is an art form, can involve casting and recasting a large number of copies. Surely a photographer’s art, like that of a painter, is the ability to capture a moment of reality and turn it into an image of interest and beauty – a true measure of creativity." }
          ],
          questions: [
            q(37, "choice", ["A", "B", "C", "D"], null, "shares an opinion with B on whether the fact that photographs can be reproduced devalues them as art?"),
            q(38, "choice", ["A", "B", "C", "D"], null, "has a different opinion from A on whether taking consistently good photographs requires professional training?"),
            q(39, "choice", ["A", "B", "C", "D"], null, "has a similar opinion to D about whether most photographs were originally regarded as works of art?"),
            q(40, "choice", ["A", "B", "C", "D"], null, "has a different view from all the others on the importance of photography in today’s art world?")
          ]
        },
        {
          id: "r7",
          title: "Part 7",
          taskType: "dragDrop",
          heading: "Finding an alternative to sugar",
          instructions: "You are going to read an article about sugar and its alternatives. Six paragraphs have been removed from the article. Choose from the paragraphs A-G the one which fits each gap (41-46). There is one extra paragraph which you do not need to use.",
          text: [
            "There is more and more evidence that sugar – or more precisely, carbohydrate – is behind our increasing rates of obesity and heart disease. Even if it is still not completely clear how it is bad for us, there are endless calls for reducing the quantity of sugar in the foods we eat. {41}",
            "Replacing the sweetness of sugar in foods is actually relatively straightforward. The first synthetic sweetener, saccharine, was discovered accidentally by a young Russian chemist named Constantin Fahlberg in 1879. While studying coal-tar derivatives, he unwittingly got some on his hands and then licked his fingers. Saccharine became widely used around World War I, when natural sugar was often in short supply. In the 1960s, scientists discovered several more sweeteners in similarly serendipitous ways, including aspartame and acesulfame K. {42}",
            "Yet while we have plenty of options for sweetness, there are several difficulties associated with using sugar substitutes in our diet. There have been various health scares over the years, which have negatively affected stevia, saccharine and aspartame, among others. {43}",
            "And there are other issues, aside from health scares and labelling problems. Sugar’s bad press puts the food industry in a difficult position because sugars have chemical functions in foods that make them difficult to replace. Sugar solutions freeze at a lower temperature than pure water, for instance. In products like ice cream, this is critical to maintaining a soft texture at freezer temperatures. Sugars also play an important role in giving products like bread and cakes their darker colour, through what chemists call non-enzymatic browning reactions. Unfortunately, artificial sweeteners are not good at reproducing either of these functions. {44}",
            "All in all, although non-sugar sweeteners are a huge industry, these drawbacks help to explain why they have come nowhere near eclipsing sugar. However, things are looking up for natural sweeteners. The evidence of health risks associated with them has turned out to be less convincing than first thought. Stevia’s years in the wilderness were apparently the result of an anonymous complaint about the risks to the U.S. authorities, which is now commonly thought to have come from a rival producer of an alternative sweetener. {45}",
            "As for the problem of taste, manufacturers have sought to overcome the aftertaste issue by combining a number of different sweeteners. We perceive the aftertaste of different sweeteners over differing timescales, so one sweetener can be used to mask the aftertaste of another. {46}",
            "In the absence of a perfect sugar replacement, such ploys could be as good as it gets for the foreseeable future. No wonder governments are instead beginning to intervene by employing measures such as higher taxes on products containing excessive sugar to save us from our sweet tooth."
          ],
          options: [
            { key: "A", text: "Scientists have also been playing their part in this rehabilitation. When it comes to texture, for instance, protein texturisers can be added instead – soy, for example. And for other substances which have a similar effect as sugar on the freezing properties of water, scientists have discovered that erythritol is one option." },
            { key: "B", text: "Public suspicions are further fuelled by the fact that many governments classify all non-sugar sweeteners as additives – even those which occur naturally in plants. As consumers have become increasingly wary of anything containing additives, manufacturers have been moving towards products which are free of them, thus putting these sweeteners at a disadvantage." },
            { key: "C", text: "An additional, increasingly common practice is to mix sugar and non-sugar sweeteners together. This helps explain why the use of non-sugar sweeteners in new product launches has risen significantly in recent years." },
            { key: "D", text: "But while sweeteners have this particular advantage, it remains a problem that they adhere more strongly to our sweetness receptors and have a different and longer-lasting taste profile to sugar, and so are perceived as tasting different by consumers." },
            { key: "E", text: "Had we ever come up with a viable alternative to sugar, of course, we wouldn’t be facing such seemingly insurmountable problems now. In our sweetness-addicted era, finding a healthier substitute for sugar is one of science’s greatest challenges. The question is, why has a solution eluded us for so long?" },
            { key: "F", text: "Then there is the problem of the bitter aftertaste of artificial sweeteners experienced by some consumers, which arises from the mechanism by which sweetness is detected in the taste buds. One problem is that the structural features of a sweet molecule which allow it to bind to the sweetness receptors on the tongue are similar to those which bind to our bitterness receptors." },
            { key: "G", text: "As well as these substances, there are naturally occurring sweeteners that we have actually known about for much longer. For example, the Guaraní peoples of modern-day Brazil and Paraguay have been using the leaves of stevia plant to sweeten foods for about 1,500 years. Also well known is the West African katemfe fruit, the seeds of which contain a sweet chemical called thaumatin." }
          ],
          questions: range(41, 46, "drop")
        },
        {
          id: "r8",
          title: "Part 8",
          taskType: "dropdownMatching",
          heading: "Dolphin intelligence",
          instructions: "You are going to read an article about dolphin intelligence. For questions 47-56, choose from the sections (A-D). The sections may be chosen more than once.",
          sections: [
            { key: "A", text: "The acrobatic acts of dolphins have fascinated humans, but scientists are now more interested in how dolphins think than in what they can do. When the head researcher presses her palms together over her head, the signal to innovate, and then puts her fists together, the sign for tandem, she has instructed a pair of dolphins to show her a behaviour and to do it in unison. As they disappear below the surface, another researcher carrying a large underwater video camera with hydrophones sinks with them. He records several seconds of audible chirping between them, then his camera captures them both slowly rolling over in unison and flapping their tails simultaneously. There are two possible explanations of this remarkable behaviour. Either one dolphin is mimicking the other so quickly and precisely that the apparent coordination is only an illusion. Or when they whistle back and forth beneath the surface, they’re literally discussing a plan." },
            { key: "B", text: "When a chimpanzee gazes at a piece of fruit or a silverback gorilla beats his chest to warn off an approaching male, it’s hard not to see a bit of ourselves in those behaviours and even to imagine what the animals might be thinking. We are, after all, great apes like them, and their intelligence often feels like a familiar version of our own. But dolphins are something truly different. They ‘see’ using sonar and do so with such phenomenal precision that they can tell from a hundred feet away what something is made of. Their eyes operate independently of each other. They’re a kind of alien intelligence sharing our planet – watching them may be the closest we’ll come to encountering an extra-terrestrial." },
            { key: "C", text: "Dolphins are extraordinarily garrulous. Not only do they whistle and click, but they also emit loud broadband packets of sound called burst pulses to discipline their young and chase away sharks. Scientists listening to these sounds have long wondered what they might mean. Yet despite a half century of research, we are none the wiser. Virtually no evidence supports the existence of anything resembling a dolphin language, and scientists have been known to voice exasperation at the continued quixotic search. However, other researchers see circumstantial evidence that the problem simply hasn’t yet been looked at with the right set of tools. Only recently have high-frequency underwater audio recorders been able to capture the full spectrum of dolphin sounds. In the past couple of years, new data-mining algorithms have made possible a meaningful analysis of those recordings. Ultimately dolphin vocalisation is either one of the greatest unsolved mysteries of science or one of its greatest blind alleys." },
            { key: "D", text: "Why did dolphins, of all the creatures roaming land and sea, acquire such large brains? To answer that question, we must look at the fossil record. About 34 million years ago the ancestors of modern dolphins were large creatures with wolflike teeth. Around that time, it’s theorised, a period of significant oceanic cooling shifted food supplies and created a new ecological niche, which offered dolphins opportunities and changed how they hunted. Dolphins became more communicative, more social – and probably more intelligent. Researchers have identified three levels of alliances within their large, open social network and found that two dolphins can be friends one day and foes the next. All these behaviours have the mark of intelligence. But what is intelligence really? When pressed, we often have to admit that we’re measuring how similar a species is to us. The question is not how smart are dolphins, but how are dolphins smart?" }
          ],
          questions: [
            q(47, "select", ["A", "B", "C", "D"], null, "a frustration expressed by some"),
            q(48, "select", ["A", "B", "C", "D"], null, "a comparison between dolphins and unknown entities"),
            q(49, "select", ["A", "B", "C", "D"], null, "a fundamental flaw in the way dolphins are studied"),
            q(50, "select", ["A", "B", "C", "D"], null, "an example of dolphin parental behaviour"),
            q(51, "select", ["A", "B", "C", "D"], null, "evidence of changeable dolphin behaviour"),
            q(52, "select", ["A", "B", "C", "D"], null, "a turning point in technological advances"),
            q(53, "select", ["A", "B", "C", "D"], null, "features dolphins once shared with other animals"),
            q(54, "select", ["A", "B", "C", "D"], null, "an analogy used to convey one of two possible outcomes"),
            q(55, "select", ["A", "B", "C", "D"], null, "a combination of movements used to communicate"),
            q(56, "select", ["A", "B", "C", "D"], null, "an innate understanding of animal behaviour")
          ]
        }
      ]
    },
    {
      id: "listening",
      title: "Listening",
      duration: 40,
      parts: [
        {
          id: "l1",
          title: "Part 1",
          taskType: "listeningChoice",
          audio: "audio/C1%20Advanced%204%2C%20Test%203%2C%20Part%201.mp3",
          instructions: "You will hear three different extracts. For questions 1-6, choose the answer (A, B or C) which fits best according to what you hear.",
          groups: [
            {
              heading: "Extract One",
              intro: "You hear two friends discussing an exhibition they've been to about the history of the Italian island of Sicily.",
              questions: [
                q(1, "choice", ["it deliberately showcased less well-known aspects of Sicily's history.", "it conveyed Sicily's distinctive character during different periods of history.", "it presented more objects from Sicily's history than any previous exhibition."], null, "The woman was impressed by the exhibition because"),
                q(2, "choice", ["support a point made by the woman.", "identify an artefact that seemed out of place.", "draw attention to an item overlooked by visitors."], null, "The man refers to the exhibit of a stone door in order to")
              ]
            },
            {
              heading: "Extract Two",
              intro: "You hear two colleagues talking about their attitude to their smartphones.",
              questions: [
                q(3, "choice", ["to see how much time he'd gain.", "to prove he wasn't dependent on it.", "to re-discover the value of face-to-face interaction."], null, "The man avoided using his smartphone for the weekend because he wanted"),
                q(4, "choice", ["getting others' approval", "setting herself achievable targets", "focusing on alternative activities"], null, "What has the woman found helpful when trying to reduce the time spent on her phone?")
              ]
            },
            {
              heading: "Extract Three",
              intro: "You hear two friends talking about their first session singing in a choir.",
              questions: [
                q(5, "choice", ["self-conscious when singing alone", "impressed by the teacher's feedback", "surprised at the number of people attending"], null, "How did the man feel during the session?"),
                q(6, "choice", ["It encourages mental wellbeing.", "It improves the skill of multi-tasking.", "It teaches the value of perseverance."], null, "What do they both say is one benefit of singing?")
              ]
            }
          ]
        },
        {
          id: "l2",
          title: "Part 2",
          taskType: "listeningText",
          audio: "audio/C1%20Advanced%204%2C%20Test%203%2C%20Part%202.mp3",
          heading: "Volunteering on a shark research project on the island of Fiji",
          instructions: "You will hear a student called Alice Brown talking about working as a volunteer on a shark research project on the island of Fiji. For questions 7-14, complete the sentences with a word or short phrase.",
          questions: [
            sentence(7, "It was her interest in {input} that attracted Alice to the shark research project on Fiji."),
            sentence(8, "Alice appreciated the fact that the project gave her the chance to set up {input} for sharks."),
            sentence(9, "Alice gives the example of the {input} in her accommodation to demonstrate the simplicity of everyday life for volunteers."),
            sentence(10, "Alice uses the term {input} to describe the impact the volunteers could have on the environment."),
            sentence(11, "Alice regarded the remote camp as a {input}."),
            sentence(12, "Alice felt lucky that the {input} for divers was something she could avoid."),
            sentence(13, "Alice says the {input} she brought to the island was popular with other volunteers."),
            sentence(14, "Alice was particularly impressed by the {input} of the coral she saw in the sea.")
          ]
        },
        {
          id: "l3",
          title: "Part 3",
          taskType: "listeningChoice",
          audio: "audio/C1%20Advanced%204%2C%20Test%203%2C%20Part%203.mp3",
          instructions: "You will hear part of an interview with two writers and researchers, Anna Baldwin and Richard Simmons, on the topic of handwriting. For questions 15-20, choose the answer (A, B, C or D) which fits best according to what you hear.",
          questions: [
            q(15, "choice", ["it is significant in the lives of young adolescents.", "it is increasing in popularity.", "it plays an important role in encouraging creativity.", "it deserves reassessment in the light of new developments."], null, "Anna believes handwriting should be studied because"),
            q(16, "choice", ["in the teaching of some science subjects.", "in helping people remember certain information.", "because it is unexpectedly time-saving compared to typing.", "because it serves to stimulate the imagination of authors."], null, "Anna and Richard agree that writing things by hand is useful"),
            q(17, "choice", ["ensures good literacy skills later on in life.", "is suffering from a growing lack of public interest.", "occupies a significant part of the current syllabus.", "has little impact on a child's overall development."], null, "Anna and Richard agree that the teaching of handwriting in primary school"),
            q(18, "choice", ["He accepts that it will be a sad day for humanity.", "He sees it as a natural progression.", "He is confident that it won't happen soon.", "He is concerned that it may impact on our sociability."], null, "How does Richard view the potential disappearance of handwriting?"),
            q(19, "choice", ["the flexibility of the medium.", "the evolution of communication.", "its influence on major events.", "its contribution to learning."], null, "Anna refers to writing throughout history in order to illustrate"),
            q(20, "choice", ["an increased desire for equal opportunities.", "a preference for using the typed word at work.", "some people abandoning their education.", "some people's true abilities being overlooked."], null, "Anna says there is evidence that the traditional focus on handwriting has resulted in")
          ]
        },
        {
          id: "l4",
          title: "Part 4",
          taskType: "listeningMultiMatch",
          audio: "audio/C1%20Advanced%204%2C%20Test%203%2C%20Part%204.mp3",
          instructions: "You will hear five short extracts in which people are talking about taking a course of driving lessons. While you listen, you must complete both tasks.",
          sets: [
            {
              heading: "Task One: For questions 21-25, choose from the list (A-H) what each speaker found most helpful during the course.",
              questions: range(21, 25, "select", ["A", "B", "C", "D", "E", "F", "G", "H"])
            },
            {
              heading: "Task Two: For questions 26-30, choose from the list (A-H) what each speaker regarded as challenging in the driving lessons.",
              questions: range(26, 30, "select", ["A", "B", "C", "D", "E", "F", "G", "H"])
            }
          ],
          options: {
            taskOne: [
              "A stress management techniques",
              "B the instructor's constant repetition",
              "C advice from a relative",
              "D visual revision aids",
              "E the support of a passenger",
              "F the non-judgemental atmosphere",
              "G the scheduling of lessons",
              "H favourable weather conditions"
            ],
            taskTwo: [
              "A reacting quickly to spoken instructions",
              "B going at an appropriate speed",
              "C maintaining concentration when tired",
              "D being on time for lessons",
              "E understanding road signs",
              "F dealing with other drivers' impatience",
              "G being exposed to busy conditions",
              "H adapting to different vehicles"
            ]
          }
        }
      ]
    }
  ],
  answerKey: {
    "reading-1": ["case", "A"],
    "reading-2": ["justify", "D"],
    "reading-3": ["vitally", "A"],
    "reading-4": ["Although", "A"],
    "reading-5": ["overloaded", "B"],
    "reading-6": ["Therefore", "C"],
    "reading-7": ["digest", "C"],
    "reading-8": ["remove", "B"],
    "reading-9": ["however", "though"],
    "reading-10": ["up"],
    "reading-11": ["which"],
    "reading-12": ["is"],
    "reading-13": ["all"],
    "reading-14": ["have"],
    "reading-15": ["although", "while", "whilst", "though"],
    "reading-16": ["be", "present"],
    "reading-17": ["worthwhile"],
    "reading-18": ["unnoticed"],
    "reading-19": ["employees"],
    "reading-20": ["frequency"],
    "reading-21": ["graceful"],
    "reading-22": ["inactivity"],
    "reading-23": ["accuracy"],
    "reading-24": ["dramatically"],
    "reading-25": { chunks: [["nothing was", "there was nothing"], ["more important"]] },
    "reading-26": { chunks: [["evaluation would", "test would"], ["take place"]] },
    "reading-27": { chunks: [["up winning"], ["the race in spite"]] },
    "reading-28": { chunks: [["to Hannah's surprise", "to Hannahs surprise"], ["the company offered", "her company offered"]] },
    "reading-29": { chunks: [["keep track"], ["of the time"]] },
    "reading-30": { chunks: [["made a point"], ["of introducing"]] },
    "reading-31": ["A"],
    "reading-32": ["B"],
    "reading-33": ["D"],
    "reading-34": ["B"],
    "reading-35": ["A"],
    "reading-36": ["D"],
    "reading-37": ["D"],
    "reading-38": ["C"],
    "reading-39": ["B"],
    "reading-40": ["A"],
    "reading-41": ["E"],
    "reading-42": ["G"],
    "reading-43": ["B"],
    "reading-44": ["F"],
    "reading-45": ["A"],
    "reading-46": ["C"],
    "reading-47": ["C"],
    "reading-48": ["B"],
    "reading-49": ["D"],
    "reading-50": ["C"],
    "reading-51": ["D"],
    "reading-52": ["C"],
    "reading-53": ["D"],
    "reading-54": ["C"],
    "reading-55": ["A"],
    "reading-56": ["B"],
    "listening-1": ["B"],
    "listening-2": ["A"],
    "listening-3": ["B"],
    "listening-4": ["B"],
    "listening-5": ["B"],
    "listening-6": ["A"],
    "listening-7": ["animal welfare", "animals"],
    "listening-8": ["protection strategies"],
    "listening-9": ["shower"],
    "listening-10": ["carbon footprint", "our carbon footprint"],
    "listening-11": ["shack"],
    "listening-12": ["introduction programme", "introduction program", "introduction"],
    "listening-13": ["peanut butter"],
    "listening-14": ["colour", "colours", "color", "colors"],
    "listening-15": ["D"],
    "listening-16": ["B"],
    "listening-17": ["C"],
    "listening-18": ["B"],
    "listening-19": ["A"],
    "listening-20": ["D"],
    "listening-21": ["F"],
    "listening-22": ["E"],
    "listening-23": ["G"],
    "listening-24": ["A"],
    "listening-25": ["B"],
    "listening-26": ["G"],
    "listening-27": ["D"],
    "listening-28": ["B"],
    "listening-29": ["F"],
    "listening-30": ["H"]
  },
  explanations: {
    "reading-1": "A is correct: 'is the case' means 'is true', which fits the sentence. B, C and D do not have this meaning.",
    "reading-2": "D is correct: 'justify' means give a good reason, matching the idea of defending constant attachment to devices.",
    "reading-3": "A is correct: 'vitally important' is the natural collocation meaning extremely important.",
    "reading-4": "A is correct: 'although' links the contrast between vast long-term memory and limited working memory. 'Despite' would need a noun or -ing form.",
    "reading-5": "B is correct: memory can be 'overloaded' when there is too much to remember.",
    "reading-6": "C is correct: 'Therefore' expresses 'for that reason', linking the previous idea to the benefit of memorising facts.",
    "reading-7": "C is correct: 'digest' means absorb and understand information.",
    "reading-8": "B is correct: 'remove the necessity' is the natural collocation.",
    "reading-9": "The answer needs a contrast with the teachers' panic; 'however' or 'though' gives that contrast.",
    "reading-10": "'Round up' is the phrasal verb meaning find and gather animals or people.",
    "reading-11": "'Which' refers back to the school getting a hive and adding beekeeping to the curriculum.",
    "reading-12": "'Where something is to be found' is a passive structure meaning where it can be found.",
    "reading-13": "'All' refers back to all the school activities described before.",
    "reading-14": "The past infinitive is formed with 'to have' plus a past participle.",
    "reading-15": "A contrast word is needed at the start of the sentence: it is usually hard to teach responsibility, but the bees made it effortless.",
    "reading-16": "'Can' is followed by an infinitive without 'to', so 'be' or 'present' fits.",
    "reading-17": "'Worthwhile' fits the pattern 'how + adjective + something can be' and means worth the time and effort.",
    "reading-18": "'Hasn't gone unnoticed' means people have definitely become aware of something.",
    "reading-19": "Companies offer benefits to the people who work for them: their employees.",
    "reading-20": "'The' before the gap and 'of headaches' after it require a noun: 'frequency'.",
    "reading-21": "Another adjective is needed before 'fluid'; 'graceful' means smooth and attractive.",
    "reading-22": "A noun is needed after 'physical'; 'inactivity' describes office workers moving very little.",
    "reading-23": "The gap is the first noun in a positive list with determination, focus and well-being.",
    "reading-24": "'Improved' is an adjective, so an adverb is needed: 'dramatically'.",
    "reading-25": "The sentence changes a superlative idea into a comparative structure: nothing was / there was nothing more important.",
    "reading-26": "A noun is needed after 'my', and 'take place' means happen.",
    "reading-27": "'End up' means finally happen, often unexpectedly; 'in spite of' expresses the contrast from 'even though'.",
    "reading-28": "'Much to someone's surprise' means something happened that surprised that person a lot.",
    "reading-29": "'Keep track of the time' means make sure you know what time it is.",
    "reading-30": "'Make a point of' means make a special effort to do something; the verb after 'of' takes -ing.",
    "reading-31": "A is correct: Crawford says demands from advertising are increasingly difficult to avoid and end up taking over. B, C and D go beyond what the text says.",
    "reading-32": "B is correct: Crawford says technology has created vehicles for self-obsession, encouraging focus on our own interests.",
    "reading-33": "D is correct: Crawford regrets that people no longer need to negotiate socially over shared things like gym music.",
    "reading-34": "B is correct: 'each' refers to the professionals mentioned, because only people can rely on their judgement.",
    "reading-35": "A is correct: the final paragraph extends Crawford's argument by explaining how real practical experiences weaken the grip of manufactured ones.",
    "reading-36": "D is correct: Crawford recognises how difficult it is for people to resist constant distractions and temptations.",
    "reading-37": "D is correct: both B and D say reproducibility does not devalue photography as art.",
    "reading-38": "C is correct: A suggests amateurs can reliably take acceptable photos, while C says an untrained photographer is unlikely to match a professional.",
    "reading-39": "B is correct: D says early photographs were not originally seen as art; B similarly notes photography as art once seemed absurd.",
    "reading-40": "A is correct: A rejects the idea that photography is the most significant contemporary art form, unlike B, C and D.",
    "reading-41": "E is correct: 'such seemingly insurmountable problems' refers back to obesity, heart disease and calls to reduce sugar.",
    "reading-42": "G is correct: 'As well as these substances' links to saccharine and other artificial sweeteners just mentioned.",
    "reading-43": "B is correct: public suspicion and additives link back to health scares and forward to labelling problems.",
    "reading-44": "F is correct: it adds the aftertaste problem, and the following paragraph refers back to these drawbacks.",
    "reading-45": "A is correct: 'this rehabilitation' refers to natural sweeteners becoming more credible again.",
    "reading-46": "C is correct: mixing sugar and non-sugar sweeteners links to manufacturers' attempts to solve aftertaste; 'such ploys' refers back to it.",
    "reading-47": "C is correct: section C mentions scientists voicing exasperation, meaning frustration.",
    "reading-48": "B is correct: section B compares dolphins to alien intelligence and extra-terrestrials.",
    "reading-49": "D is correct: section D criticises measuring dolphins by similarity to humans instead of asking how dolphins are smart.",
    "reading-50": "C is correct: section C describes burst pulses used to discipline young dolphins.",
    "reading-51": "D is correct: section D says dolphins can be friends one day and foes the next.",
    "reading-52": "C is correct: section C describes recent technology allowing fuller recording and analysis of dolphin sounds.",
    "reading-53": "D is correct: section D says dolphin ancestors were large creatures with wolflike teeth.",
    "reading-54": "C is correct: section C uses 'blind alley' as an analogy for a research path that may lead nowhere.",
    "reading-55": "A is correct: section A describes palm and fist signals used to communicate instructions.",
    "reading-56": "B is correct: section B explains that ape behaviour feels familiar because humans are great apes too.",
    "listening-1": "B is correct: the woman says Sicily itself prevailed above the different cultures. A is not mentioned, and C is wrong because the display was limited to little more than 200 objects.",
    "listening-2": "A is correct: the stone door supports the woman's point about mystery and the enigmatic nature of the objects.",
    "listening-3": "B is correct: the man wanted to prove he could do without the phone. Extra time and face-to-face contact were benefits, not his original reason.",
    "listening-4": "B is correct: the woman limits phone use to set points in the day for short periods, which she finds achievable.",
    "listening-5": "B is correct: the man says the tutor noticed things and gave constructive criticism. He loved singing alone and was not surprised by the number of people.",
    "listening-6": "A is correct: both speakers describe singing as clearing worries from the mind.",
    "listening-7": "Alice was keen to do more on animal welfare, so the shark project seemed ideal.",
    "listening-8": "Alice most appreciated the chance to develop protection strategies for sharks.",
    "listening-9": "The shower using stream water illustrates the simple, green way the volunteers lived.",
    "listening-10": "Alice says they wanted to reduce their impact, commonly called their carbon footprint.",
    "listening-11": "Alice thought of the satellite camp as a shack; 'haven' was another volunteer's word.",
    "listening-12": "Because Alice was already a qualified diver, she did not have to follow the introduction programme.",
    "listening-13": "Alice's peanut butter was popular with everyone; jam belonged to another volunteer.",
    "listening-14": "Alice says she was very impressed by the colours of the coral underwater.",
    "listening-15": "D is correct: Anna says alternative ways of recording thoughts mean it is time to look critically at handwriting. The other options are mentioned but not as the reason for study.",
    "listening-16": "B is correct: both speakers say handwriting helps cognitive processing and later recall.",
    "listening-17": "C is correct: both speakers say handwriting takes up a large amount of primary-school curriculum time.",
    "listening-18": "B is correct: Richard sees the disappearance of handwriting as another natural step in communication, despite some loss.",
    "listening-19": "A is correct: Anna uses history to show writing has been used flexibly in many situations.",
    "listening-20": "D is correct: Anna says poor handwriting has led teachers and employers to overlook people's true abilities.",
    "listening-21": "F is correct: Speaker 1 found the calm, non-judgemental instructor helpful. Weather and the mother's saying were not helpful influences.",
    "listening-22": "E is correct: Speaker 2 says they would not have managed without Dave's comments from the back seat.",
    "listening-23": "G is correct: Speaker 3 says the secret was scheduling lessons very early in the morning.",
    "listening-24": "A is correct: Speaker 4 says breathing exercises helped them succeed.",
    "listening-25": "B is correct: Speaker 5 says repeated practice lesson after lesson was the key to passing.",
    "listening-26": "G is correct: Speaker 1 was thrown by the sheer amount of traffic.",
    "listening-27": "D is correct: Speaker 2 says they were often rushing to make the lesson on time.",
    "listening-28": "B is correct: Speaker 3 was tempted to drive too fast on empty roads.",
    "listening-29": "F is correct: Speaker 4 was unsettled by impatient drivers sounding horns and making no concessions.",
    "listening-30": "H is correct: Speaker 5's biggest problem was not being guaranteed the same car for every lesson."
  }
};

function q(number, type, options, promptWord, prompt) {
  return { number, type, options, promptWord, prompt };
}

function transform(number, first, word, second) {
  return { number, type: "text", first, word, second };
}

function sentence(number, text) {
  return { number, type: "text", text };
}

function range(start, end, type, options = null) {
  return Array.from({ length: end - start + 1 }, (_, i) => q(start + i, type, options));
}
