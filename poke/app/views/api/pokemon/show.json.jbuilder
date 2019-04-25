json.pokemon do
    json.merge! @pokemon.attributes.reject{ |key, _| key.in?(['created_at', 'updated_at']) }
end
json.item do
    @pokemon.items.each do |item|
        json.set! item.id do
            json.merge! item.attributes.reject{ |key, _| key.in?(['created_at', 'updated_at']) }
        end 
    end
end