// @ts-check

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

/**
 * @typedef {import("../src/data/message").Message} Message
 */

const outputPath = path.resolve(
  __dirname,
  "../src/_fixture/messageData.dummy.json"
);

const numOfMessages = 100;

const userIds = [
  "id-ginpei_jp",
  "id-great_tanaka",
  "id-oOoOoOoOo",
  "id-dodododobot",
];

const messageBodies = `
Lorem ipsum dolor sit amet consectetur adipisicing elit
Neque, quae voluptatibus! Quam, unde quo autem ut excepturi tempora
Recusandae, eius odio! Perferendis odio repudiandae nemo labore doloribus repellat
Fuga, illo.
Non molestias velit delectus similique dignissimos illum officiis voluptatibus vel, nemo, veniam fugiat provident omnis soluta laudantium neque dolor consequuntur exercitationem nisi dolorum natus magnam rem magni
Delectus, facilis id!
Id minima, quod et, veritatis nesciunt tempore nostrum cumque molestiae atque similique soluta odio ratione voluptates, dignissimos expedita fugit
Minus inventore necessitatibus eaque accusamus earum cum tenetur! Nostrum, quisquam a?
Laboriosam quo natus eaque fugit ipsa cumque a quae nobis laudantium, eum consequuntur minus libero, suscipit dolorem necessitatibus nisi consequatur assumenda sit amet incidunt dicta
Voluptates cum voluptatum quia sunt.
Sed esse tempora nobis temporibus ratione numquam id odit, corrupti fugit? Explicabo atque repudiandae ab voluptatem cupiditate optio illo distinctio, repellendus veniam eos aliquid doloribus dicta id exercitationem perferendis possimus?
Provident in, ea at vitae excepturi aliquid maiores, eligendi ipsum, voluptatem accusamus reprehenderit facere error officia? Ratione debitis optio similique nobis provident placeat, expedita dolores odit excepturi, dolor officia delectus?
Fugiat excepturi consequatur voluptas dolores aperiam cupiditate ipsa molestias sed! Rerum, nihil quos nam omnis eveniet numquam voluptatem vel fuga mollitia hic similique, officiis perspiciatis minima optio maiores magni labore?
Quod natus tenetur veritatis minima corrupti? Eligendi ipsa, incidunt molestias repellendus a cum autem recusandae accusantium in perferendis illo ratione voluptas dicta iusto! Architecto impedit necessitatibus quidem officiis reprehenderit veniam.
Cumque expedita nemo voluptatum? In facilis pariatur quia, quasi quis recusandae ducimus quidem iste corrupti dolore perferendis ex dolorum minus nam veritatis
Eaque incidunt commodi officia cupiditate? Minus, repellat labore.
Nihil totam asperiores optio corporis officia alias neque magnam magni soluta sed minus ipsam enim debitis ducimus accusantium repellendus error deserunt velit dolore, corrupti eligendi exercitationem voluptatibus explicabo impedit
Officiis?
Blanditiis error voluptatibus possimus facilis ipsa nesciunt deleniti dolorem consequuntur repudiandae
In beatae inventore deleniti natus ipsa odit, incidunt harum deserunt fugit cumque similique, quam quasi quisquam nesciunt repellat! Molestiae.
Numquam nihil impedit inventore! Magnam, minima qui quo ipsum pariatur nulla quis, ad enim ratione debitis ut sint minus velit esse voluptas
Quos debitis, porro explicabo veniam tenetur minima nesciunt.
Ipsam expedita consequuntur perspiciatis doloribus voluptatum quam dolore odit ad labore excepturi ipsum eligendi repellendus suscipit, provident animi placeat saepe quae laudantium! Maiores voluptas quam voluptatum ex beatae temporibus velit.
Cumque, omnis
Quae veniam odit pariatur natus facere quibusdam consequatur, unde ratione impedit mollitia molestias nisi ab maiores culpa neque, quia at? Natus iure, mollitia facere laboriosam hic corrupti consequatur.
Blanditiis dolorem pariatur placeat vel laborum, ullam quia architecto, assumenda dolore repellat ipsam distinctio commodi ducimus! Quisquam tempora libero voluptates laborum, incidunt totam cumque? Odit illum eaque sed iste et?
Tenetur exercitationem consequatur laudantium eaque error quo accusamus sed nesciunt alias! Quidem autem incidunt, odio rem magni quo maxime, ratione, impedit voluptatum quos modi illum qui laudantium
Quibusdam, aperiam at!
Sapiente natus recusandae veniam deserunt, reiciendis tenetur corrupti provident, cum quos illo minima aliquam omnis, aut labore magni! Totam consequatur neque magnam tempora deserunt, ratione dignissimos iste! Minima, quidem inventore!
Commodi et exercitationem dolor magni ullam dolores maiores quaerat numquam, obcaecati, in alias laborum ad suscipit fuga omnis ab a aliquid, atque quae natus doloremque nostrum veniam similique facere
Ea!
Suscipit voluptates reiciendis iure, doloribus dignissimos fugit eos corrupti laborum nulla assumenda voluptatem atque accusantium beatae nam amet necessitatibus, eligendi repudiandae ea dicta? Ratione magni mollitia molestias accusamus tempora facere?
Reiciendis aut eaque delectus iure quae
Cupiditate, est itaque dicta iure accusamus, nobis doloribus vero provident placeat id repellendus quo alias fugit laudantium ex temporibus possimus culpa? Sit, eius ullam?
Vero, natus deserunt dolorem consectetur eum eaque! At aspernatur voluptas voluptatem, odit nam nisi ad
Enim ipsum impedit perspiciatis, at veniam sapiente tempore quia, accusamus quae magnam, cumque amet fuga.
Laboriosam laudantium numquam maiores earum
Perspiciatis doloremque quo aliquam adipisci quisquam iusto eligendi sequi magnam eum blanditiis saepe, debitis fuga minima recusandae vel eveniet earum, incidunt accusamus deleniti obcaecati dolores.
Consectetur, sapiente error at, minus cupiditate vero tenetur perspiciatis amet similique veniam quo culpa? Labore mollitia saepe, molestiae quasi nisi incidunt tempore, hic deserunt veritatis recusandae necessitatibus libero distinctio nostrum.
Ipsa dolor, voluptatem quas fugit cupiditate aliquam deserunt aperiam eius provident iste soluta nulla eligendi illo vitae veritatis, ut inventore quibusdam incidunt laboriosam nobis perspiciatis itaque? Error modi dolorum dignissimos?
Dolores earum distinctio pariatur culpa voluptatum dolor mollitia saepe deserunt fuga sunt libero quos modi eligendi id numquam, nesciunt nisi perferendis ducimus reiciendis perspiciatis iusto recusandae asperiores est minus! Eveniet?
Accusantium laborum sint sit eligendi
Quaerat, ducimus magni vero hic rem libero laborum veritatis laboriosam! Sunt iusto cumque corporis nemo qui voluptatum necessitatibus libero porro, tempora neque consectetur, inventore deserunt?
Nobis cumque animi beatae autem optio reiciendis sit praesentium! Nulla, fugiat repellat suscipit nobis quam corporis odit fuga numquam libero saepe et optio ea, minus quae eligendi necessitatibus animi atque.
Numquam quidem commodi ut nisi eligendi rem quasi pariatur ab minima nobis neque sint sed earum minus consequatur, vero et
Ratione, quas reprehenderit
Laudantium quam inventore incidunt reiciendis veritatis quia.
Suscipit odit quam provident voluptatem aperiam, non ut
Pariatur, tenetur
Maxime nesciunt perspiciatis, saepe optio, sunt dicta, repudiandae tenetur ab atque et laudantium neque quidem illum ipsum blanditiis voluptates in?
`
  .trim()
  .split("\n");

// ----------------------------------------------------------------

function main() {
  const messages = generate();

  const json = JSON.stringify(messages);
  fs.writeFileSync(outputPath, json, "utf-8");
}

/**
 * @returns {readonly Message[]}
 */
function generate() {
  /** @type {Message[]} */
  const messages = [];

  for (let index = 0; index < numOfMessages; index++) {
    const createdAt = getRandomTime();
    /** @type {Message} */
    const message = {
      body: pickRandom(messageBodies),
      createdAt,
      id: generateId(),
      updatedAt: createdAt,
      userId: pickRandom(userIds),
    };
    messages.push(message);
  }

  return messages;
}

/**
 * @template T
 * @param {T[]} arr
 * @returns {T}
 */
function pickRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const picked = arr[index];
  return picked;
}

function getRandomTime() {
  return (
    new Date("2000-01-01 00:00:00").getTime() +
    Math.floor(Math.random() * 10 * 365 * 24 * 60 * 60 * 1000)
  );
}

function generateId() {
  return Math.random().toFixed(32).slice(2);
}

// ----------------------------------------------------------------

main();
