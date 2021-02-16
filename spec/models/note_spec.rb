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
require 'rails_helper'

RSpec.describe Note, type: :model do
  it "is valid with valid attributes" do
    expect(Note.new).to be_valid
  end
end
