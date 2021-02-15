FactoryBot.define do
  factory :note do
    title { Faker::Lorem.sentence }
    created_at { Faker::Date.backward(days: 14) }
    updated_at { Faker::Date.backward(days: 14) }
  end
end