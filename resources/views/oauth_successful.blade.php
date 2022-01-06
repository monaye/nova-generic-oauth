@extends('layouts.minimal')

@section('content')
    <p>
        {{ $slug }}との認証を完了しました。
    </p>
    @if (count($companies) > 1)
        <p>
            複数の会社が登録されています。設定画面に戻って同期先の会社の選択を行ってください。
        <p>
    @endif
    <div class="flex align-center justify-center mt-20">
        <a class="bg-gray-800 text-white rounded-md px-4 py-2 mr-4 no-underline"
            href="{{ url("/main/resources/team-settings/$teamId") }}">設定画面に戻る</a>
    </div>
@endsection
