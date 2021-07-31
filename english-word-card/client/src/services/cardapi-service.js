class CardapiService {
    _apiBase = "http://localhost:3003"

    async getResourse(url, method = 'POST', body = null, headers = {}) {
        const res = await fetch(this._apiBase + url, { method });

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllCards() {
        const res = await this.getResourse('/api/cards', 'POST');
        return res;
    }

    async getCard(id) {
        const { card } = await this.getResourse(`/api/cards/${id}`, 'POST');
        return this._transformCard(card);
    }

    _transformCard = card => ({
        engWord: card.eng_word,
        rusWord: card.rus_word,
        engPartOfSpeech: card.eng_part_of_speech,
        rusPartOfSpeech: card.rus_part_of_speech,
        frontImg: card.front_img,
        backImg: card.back_img,
        cardId: card.card_id,
    });
};

export default CardapiService;