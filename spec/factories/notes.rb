# frozen_string_literal: true

# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  body       :string
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :note do
    title { Faker::Lorem.sentence }
    created_at { Faker::Date.backward(days: 14) }
    updated_at { Faker::Date.backward(days: 14) }
  end
end
