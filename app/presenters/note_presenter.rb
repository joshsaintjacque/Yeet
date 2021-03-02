# frozen_string_literal: true

class NotePresenter
  include Rails.application.routes.url_helpers
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::NumberHelper

  attr_reader :note

  delegate_missing_to :note

  def initialize(note:)
    @note = note
  end

  def is_recent
    note.created_at > 7.days.ago
  end

  def as_json(_options = {})
    {
      is_recent: is_recent
    }.merge(note.as_json)
  end

  def to_json(*options)
    as_json(*options).to_json(*options)
  end
end
