require 'rails_helper'

RSpec.describe Note, type: :model do
  it "is valid with valid attributes" do
    expect(Note.new).to be_valid
  end
end
