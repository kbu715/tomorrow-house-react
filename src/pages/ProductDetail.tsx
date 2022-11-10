import React from 'react'
import 'normalize.css'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modal'

import { Modal } from 'src/components'
import UnControlled from 'src/components/Uncontrolled'

const ProductDetailPage: React.FC = () => {
  const modals = useAppSelector(getModals)
  return (
    <div>
      <main className="container">
        <article>
          <header>
            <h3>비제어 FORM</h3>
          </header>
          <UnControlled />
        </article>
      </main>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        laudantium dicta! Dolorem incidunt, voluptatem porro sint voluptate
        facere enim consequuntur ut officiis impedit nam dolorum, odit iste
        libero labore pariatur eligendi, cum alias a debitis quidem quisquam.
        Nihil accusamus doloremque deserunt aliquam, inventore modi, quam iusto
        aperiam odit quae ullam nisi dolore error tempora quaerat necessitatibus
        amet vitae explicabo. Libero iure officia, rerum eum doloribus facilis
        reprehenderit suscipit dolor, a magnam necessitatibus vel cupiditate ea
        ex ipsam impedit harum quas dolorum vero est accusantium perspiciatis
        porro, fugiat optio. Totam exercitationem cumque quo reprehenderit quis
        animi doloribus eveniet corrupti odio, quod rerum magni ea voluptatum
        repudiandae porro quibusdam! Vitae nobis eius sunt dolores. Aut alias
        modi veritatis, fugit consequatur officiis cupiditate placeat, fugiat
        hic voluptas excepturi voluptate eos aperiam! Autem voluptatem
        consequatur explicabo itaque illo praesentium natus beatae perspiciatis,
        non et maxime ipsam est tenetur cupiditate voluptates iusto sed minus,
        dignissimos amet quod assumenda iure? Suscipit fuga voluptate animi at
        magni consectetur sint deleniti provident eius voluptates perspiciatis
        ullam architecto, repellat dolorem dicta ipsa qui dolore magnam
        cupiditate nisi illo labore omnis excepturi optio? Earum temporibus, eum
        ab debitis est repellat. Illo qui animi similique eos voluptate, natus
        excepturi non unde saepe ipsa vero, totam cum optio temporibus neque
        fuga eius voluptatem fugiat culpa enim quod voluptas? Necessitatibus at
        voluptates distinctio suscipit laudantium expedita excepturi numquam
        cupiditate itaque temporibus error tempora fuga esse harum sunt, tempore
        impedit consectetur nihil? Molestiae perspiciatis perferendis quaerat
        itaque quas omnis. Atque sed nostrum sapiente inventore labore laborum
        beatae ducimus commodi dolorem? Laudantium, temporibus. Fugit dolorum at
        totam iusto non tenetur a, cumque facilis doloremque repudiandae, minus
        vel aut aliquid. Dolorem eveniet minus praesentium optio doloribus
        repellat molestiae voluptas eligendi omnis incidunt laborum excepturi
        voluptatem, dolore cupiditate numquam? Nobis placeat sit corporis
        quisquam dolorum facere aliquid delectus dolor consequuntur ea possimus,
        suscipit hic. Maiores mollitia laboriosam similique voluptatibus quaerat
        facere reiciendis a. At minus soluta ipsa ducimus maxime possimus
        quisquam tempore ex unde, provident voluptatum, qui recusandae sunt.
        Sit, dolor pariatur veritatis sed exercitationem doloribus maxime est
        dignissimos doloremque atque commodi optio voluptatum amet quod
        cupiditate laboriosam aperiam, reprehenderit tempora minus laudantium
        consequatur nisi! Dicta asperiores eum aliquam libero amet tempore
        alias, eaque quia qui ab beatae, iure facilis explicabo. Molestias vitae
        facere, inventore perferendis consectetur eius illo maiores! Velit atque
        impedit nisi numquam nostrum delectus sit cupiditate, magnam voluptatum
        recusandae eligendi beatae quod unde aliquid ipsum voluptatem ducimus
        cumque architecto doloremque illo fugiat ullam omnis? Sapiente fugiat
        optio eligendi ab animi, non dolor, cupiditate assumenda eos delectus
        temporibus earum, quo qui ducimus laudantium quas commodi distinctio
        praesentium ratione expedita architecto placeat cumque veritatis quam?
        Est fugit, facilis ut a porro sit doloremque corrupti, distinctio iste
        maiores autem beatae aut minima sapiente veritatis incidunt debitis
        tempore itaque sunt molestiae quibusdam, quos aliquam modi? Officia, sed
        corporis? Explicabo saepe repudiandae ducimus, quasi corporis voluptatum
        commodi similique voluptates natus vel, cumque, nesciunt dolore
        reiciendis nostrum neque amet ex possimus fuga accusamus ut asperiores.
        Quae, ratione, explicabo quaerat odit dolorem doloremque enim labore
        deserunt quidem necessitatibus, hic sit aliquid voluptatum quam
        voluptatem nisi neque sequi officiis eaque ex quibusdam soluta suscipit
        pariatur iusto? Dolores corrupti quibusdam nostrum, sapiente repudiandae
        minus, libero veritatis quae quisquam labore odit dicta blanditiis
        tempore dolore iste tenetur reiciendis sint. Pariatur totam perspiciatis
        vitae. Ratione eaque, autem pariatur unde asperiores at sapiente
        reiciendis mollitia. Debitis sit deserunt quo adipisci iusto ipsum
        officia culpa totam quia quod! Accusantium ad vero, inventore
        cupiditate, quibusdam beatae excepturi eaque quo ullam eveniet suscipit
        repudiandae cumque voluptas nobis temporibus adipisci? Officia amet
        atque a, aut voluptatum mollitia maiores rerum nesciunt voluptas nam
        voluptatibus officiis nobis illo neque laudantium iste, nihil
        cupiditate? Minima quis amet neque similique rem ex ipsam nesciunt?
        Debitis facere ratione laborum. Doloremque, enim! Aspernatur laborum
        voluptatem repellendus neque obcaecati, tempora dolores nobis enim
        dolore tenetur veritatis cum quae ipsa suscipit vero facilis soluta
        perspiciatis molestias consectetur laboriosam adipisci mollitia
        reiciendis magnam? Doloremque porro ab non recusandae? Dolores odio
        neque deserunt dolorum nulla nemo, illo harum in iste, quidem
        consequatur quibusdam voluptate exercitationem atque voluptatum beatae
        architecto. Atque explicabo quidem, non, ab officiis delectus, ipsum
        fugit ipsam nesciunt temporibus quasi cum voluptatum quae tenetur optio
        ut reprehenderit? Nisi blanditiis deserunt earum, mollitia aliquam non
        ullam maiores cum velit magnam rerum at maxime illo ab expedita
        accusamus esse explicabo quae. Ipsam, tenetur neque! Hic sed possimus
        molestias consequatur ad eveniet natus, qui illum. Eum, error beatae
        unde adipisci necessitatibus consequuntur magnam! Illo voluptates
        repudiandae incidunt id voluptate veniam. Perspiciatis numquam
        accusantium incidunt laborum, illo neque labore alias veniam similique
        natus veritatis animi et placeat delectus quasi fugit soluta? Corrupti
        deserunt laboriosam rem iste debitis quas, quae fugiat amet, nesciunt
        provident asperiores molestias dicta tempore officia ut ipsum neque
        commodi? Illum unde optio quae cupiditate debitis ut, nesciunt culpa,
        quaerat nemo minus sapiente explicabo modi id rem harum expedita
        laudantium tempora deleniti dicta! At quia explicabo consequatur iusto
        numquam distinctio corporis. Autem, quaerat. Et repellat libero rerum!
        Dolores necessitatibus quam sed labore repudiandae, magni consectetur
        delectus maxime omnis laboriosam! Nemo ipsa veniam vel accusamus
        distinctio? Dignissimos quasi minima quas recusandae dolorum dolor sed
        voluptates quos doloribus? Quas deleniti magni quod quasi animi nemo ex
        aliquid laboriosam repellendus, earum exercitationem sed, voluptate
        adipisci quia debitis velit temporibus? Adipisci nostrum rem consectetur
        sint sunt sequi, totam libero voluptatibus itaque officiis magni beatae
        animi pariatur modi aut, aspernatur illo blanditiis, non ab ipsam? Neque
        atque modi ullam alias doloribus consequatur reiciendis eius! Sint
        distinctio nostrum, mollitia eaque libero odio doloremque natus ad? Fuga
        consectetur veniam dolore nostrum dignissimos, explicabo, aperiam
        aliquid debitis necessitatibus numquam sint repudiandae doloribus hic
        obcaecati ratione sunt distinctio unde ipsa quo sequi dicta quisquam
        possimus exercitationem molestias. Vitae veniam possimus aliquam facere
        reiciendis temporibus sit, aperiam unde sint fuga doloribus praesentium
        debitis autem quis quibusdam repellendus quas molestias quo perferendis
        non sunt quia rem? Quod non nisi unde consequuntur eius possimus
        ratione! Voluptates perferendis dignissimos aliquam, cum consequatur
        nemo vitae eveniet facere, possimus pariatur nihil impedit, voluptatibus
        autem modi?
      </p> */}

      {modals.length > 0 && <Modal />}
    </div>
  )
}

export default ProductDetailPage
