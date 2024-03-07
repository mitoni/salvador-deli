---
url: /
sections:
  - src: >-
      https://www.paypal.com/sdk/js?client-id=BAAukxJDGN61X5EAtm0OCPHv3s_WqqyP-Nog43dhaEzpwIvWt3QyemmcnDhLS7ML7QK34iBfABFM_paOUo&components=hosted-buttons&enable-funding=venmo&currency=USD
    _template: script
  - position: right
    color1: '#FF6969'
    color2: '#FFF9DE'
    _template: Bubble
  - blocks:
      - paragraphs:
          - content: >
              ## Who are we?


              We’re Courtney Cotherman and Linda Moore!


              You may know us from **Kilted Mermaid**, The Kilted Mermaid Wine
              Club (our first collaboration), or you may have seen us around
              town.


              We love the hospitality business, so we decided to team up
              together. We’re so excited to bring **“Artfully Elevated Pub
              Food”** to you!

              Stay tuned for more information and updates!


              Cheers!
            content_align: end
            _template: rich_text
      - paragraphs:
          - image: /uploads/courtney and linda.jpg
            _template: image
    width: 6
    id: who-are-we
    _template: columns
  - url: /uploads/sandwich.png
    position: left
    offset: -8
    _template: background_image
  - paragraphs:
      - body: |2-
            paypal.HostedButtons({
              hostedButtonId: "B93N3M9838T2E",
            }).render("#paypal-container-B93N3M9838T2E")
        async: true
        _template: script
      - content: "## Tides and Tastings\n\n#### An Ocean Science Pairing Event\n\nJoin us on **Monday, April 29th, from 6 to 8 pm** for Tides & Tastings: An Ocean Science Pairing Event. Come out to support Florida Atlantic Harbor Branch Oceanographic Institute.\_\n\nIndulge in a culinary journey with five stations offering delightful food and drink pairings, curated by Salvador Deli and Walking Tree Brewery. Interact with FAU Harbor Branch members at each station to gain insights into their impactful work.\n\nThis exclusive event will be complemented by live music from Murphy Dogs, featuring Jim Sullivan, Ph.D., Executive Director of FAU Harbor Branch, and Tim Moore, Ph.D., Research Professor at FAU Harbor Branch.\n\n\_Tickets are priced at $80 and include access to all five pairings. A portion of proceeds will go to support student success at Harbor Branch Oceanographic Institute. Don’t miss out on this unique experience!\n"
        _template: rich_text
      - body: <div id="paypal-container-B93N3M9838T2E"></div>
        _template: html
    id: tides-and-tastings
    _template: centered
  - blocks:
      - paragraphs:
          - content: |
              ### Location

              ##### Walking Tree Brewery

              ##### 3209 Dodger Rd, Vero Beach, FL 32960
            text_align: center
            _template: rich_text
      - paragraphs:
          - content: |
              ### Hours

              ##### TBA
            text_align: center
            _template: rich_text
      - paragraphs:
          - content: >
              ### Contact


              ###### Phone:


              ###### (772) 633-7041


              ######


              ###### Email:
              [courtney@salvadordelivb.com](mailto\:courtney@salvadordelivb.com
              "Contact Email")


              ###### [linda@salvadordeli.com]()
            text_align: center
            _template: rich_text
    width: 4
    id: info
    _template: columns
  - url: >-
      /uploads/mito_11_a_flatbread_with_tomatoes_mozzarellas_and_other_healthy_f9fc58e4-677b-4637-ad79-6403b8706fad.png
    position: right
    offset: 10
    _template: background_image
---

